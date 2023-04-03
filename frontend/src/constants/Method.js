import axios from "axios";
import { path, BASE_URL_DEV } from "./API";
import { alertFailure } from "../helper/alert";

import jwt_decode from "jwt-decode";
// ====================================Refresh Token===============================
let token = "";
let setToken = "";
let expire = "";
let setExpire = "";

export const refreshToken = async () => {
  try {
    const response = await axios.get(`${BASE_URL_DEV}/${path.token}`);
    setToken = response.data.accessToken;
    const decoded = jwt_decode(response.data.accessToken);
    setExpire = decoded.exp;
  } catch (error) {
    if (error.response) {
      window.location = "/";
    }
  }
};

const axiosJWT = axios.create();

axiosJWT.interceptors.request.use(
  async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
      const response = await axios.get(`${BASE_URL_DEV}/${path.token}`);
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken = response.data.accessToken;
      const decoded = jwt_decode(response.data.accessToken);
      setExpire = decoded.exp;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ===================================================================
export const LoginPost = async (email, password) => {
  await axios
    .post(`${BASE_URL_DEV}/${path.login}`, {
      email: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("name", JSON.stringify(res.data.name));
      localStorage.setItem("email", JSON.stringify(res.data.email));
      localStorage.setItem("role", JSON.stringify(res.data.role));
      window.location = "/dashboard";
    })
    .catch((error) => {
      alertFailure(error.response.data.msg);
    });
};

export const RegisterPost = async (name, email, password, confPassword) => {
  await axios
    .post(`${BASE_URL_DEV}/${path.register}`, {
      name: name,
      email: email,
      password: password,
      confPassword: confPassword,
    })
    .then((res) => {
      window.location = "/login";
    })
    .catch((error) => {
      alertFailure(error.response.data.msg);
    });
};

export const Logout = async () => {
  await axios
    .delete(`${BASE_URL_DEV}/${path.logout}`)
    .then((res) => {
      localStorage.clear();
      window.location = "/";
    })
    .catch((error) => {
      alertFailure(error.response.data.msg);
    });
};

export const getUsers = () => {
  return axiosJWT.get(
    `${BASE_URL_DEV}/${path.register}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    []
  );
};

export const getUserById = (email) => {
  return axiosJWT.post(`${BASE_URL_DEV}/${path.getUserById}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    email: email,
  });
};

export const getJobList = (word) => {
  return axios.get(
    `${BASE_URL_DEV}/${path.jobList}`,
    { params: { description: word }, body: { description: word } },
    []
  );
};

export const getJobListSearch = (word) => {
  // return axios.get(
  //   `${BASE_URL_DEV}/${path.jobList}`,
  //   { params: { description: word }, data: { description: word } },
  //   []
  // );

  return axios({
    method: "get",
    url: `${BASE_URL_DEV}/${path.jobList}`,
    headers: {},
    data: {
      description: word,
    },
    params: { description: word },
  });
};

export const getJobListId = async (id) => {
  localStorage.setItem("jobId", JSON.stringify(id));
  await axios
    .get(`${BASE_URL_DEV}/${path.jobListId}`, { params: { id: id } }, [])
    .then((res) => {
      window.location = "/joblistid";
      return res;
    })
    .catch((error) => {
      alertFailure(error.response.data.msg);
    });
};
