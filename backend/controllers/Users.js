import Users from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import requestPromise from "request-promise-native";

export const Register = async (req, res) => {
  const { name, email, password, confPassword, role } = req.body;

  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Kata sandi dan Konfirmasi kata sandi tidak cocok" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  const userCheck = await Users.findAll({
    where: {
      email: email,
    },
  });
  if (userCheck.length === 1)
    return res.status(409).json({ msg: "Email sudah terdaftar" });

  try {
    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role || "user",
    });
    res.status(201).json({ msg: "Anda Berhasil Registrasi" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Terjadi Kesalahan Registrasi" });
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Kata sandi Salah" });
    const userId = user[0].id;
    const email = user[0].email;
    const name = user[0].name;
    const role = user[0].role;
    const accessToken = jwt.sign(
      { userId, name, email, role },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, name, email, role },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      //kalo https perlu tambah
      // secure: true
    });
    res.json({ accessToken, name, email, role });
  } catch (error) {
    res.status(404).json({ msg: "Email tidak ditemukan" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(404).json({ msg: "Email tidak ditemukan" });
  }
  try {
    const user = await Users.findAll({
      attributes: ["id", "name", "email"],
      where: {
        email: email,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Terjadi Kesalahan" });
  }
};

export const jobList = async (req, res) => {
  try {
    const users = await requestPromise({
      method: "GET",
      url: `http://dev3.dansmultipro.co.id/api/recruitment/positions.json`,
      rejectUnauthorized: false,
      requestCert: true,
      agent: false,
      json: true,
    });

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

export const jobListID = async (req, res) => {
  try {
    const users = await requestPromise({
      method: "GET",
      url: `http://dev3.dansmultipro.co.id/api/recruitment/positions/${req.body.id}`,
      rejectUnauthorized: false,
      requestCert: true,
      agent: false,
      json: true,
    });

    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const jobListSearch = async (req, res) => {
  try {
    const users = await requestPromise({
      method: "GET",
      url: `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${req.body.description}`,
      rejectUnauthorized: false,
      requestCert: true,
      agent: false,
      json: true,
    });

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};
