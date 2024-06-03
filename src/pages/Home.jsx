import React from "react";
import Users from "../components/Users";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom"; 

function Home() {
  return (
    <>
        <Users/>
        <Outlet/>
    </>
  );
}

export default Home;
