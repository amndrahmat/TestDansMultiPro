import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarHome from "./components/NavbarHome";
import Footer from "./components/Footer";
import PrimaryNavbar from "./components/PrimaryNavbar";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";
import Users from "./containers/Users";
import JobList from "./containers/jobList";
import JobListId from "./containers/jobListId";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/joblistid"
          element={
            <>
              <PrimaryNavbar />
              <NavbarHome />
              <JobListId />
              <Footer />
            </>
          }
        />
        <Route
          path="/joblist"
          element={
            <>
              <PrimaryNavbar />
              <NavbarHome />
              <JobList />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <PrimaryNavbar />
              <NavbarHome />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <PrimaryNavbar />
              <NavbarHome />
              <Register />
              <Footer />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <NavbarHome />
              <Dashboard />
              <Footer />
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              <Navbar />
              <NavbarHome />
              <Users />
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <PrimaryNavbar />
              <NavbarHome />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
