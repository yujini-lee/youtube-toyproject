import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet/>
    </>
  );
}

export default Root;
