import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "./assets/imgs/logo.png";

import {
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
  SidebarContent,
  SidebarFooter,
  Menu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const SideBar = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />
      <ProSidebar image="" className="h-100" style={{ zIndex: 99999, display: isToggled ? "block" : "none" }}>
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<i className="fas fa-gem" />}>Dashboard</MenuItem>
            <SubMenu title="Components" icon={<i className="fas fa-heart"></i>}>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter className="text-center p-3">Copyright &copy; {new Date().getFullYear()} Xams</SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
