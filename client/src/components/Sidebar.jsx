import React from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Menu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const SideBar = () => {
  return (
    <ProSidebar>
      <SidebarHeader>
        <h5>Xams</h5>
      </SidebarHeader>
      <SidebarContent>
      <Menu iconShape="square">
    <MenuItem icon={<i className="fas fa-gem" />}>Dashboard</MenuItem>
    <SubMenu title="Components" icon={<i className="fas fa-heart"></i>}>
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
      </SidebarContent>
      <SidebarFooter>
        {/**
         *  You can add a footer for the sidebar ex: copyright
         */}
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBar;
