import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiLogIn } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SideBar = () => {
  const [isMenuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    isMenuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  
  return (
    <>
      <div id="header">
        <ProSidebar collapsed={isMenuCollapse}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
              {isMenuCollapse ? (
                <FontAwesomeIcon icon={faBars} className="icon" />
              ) : (
                <FontAwesomeIcon icon={faTimes} className="icon" />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Hallgatók
              </MenuItem>
              <MenuItem icon={<FaList />}>Új hallgató</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogIn />}>Bejelentkezés</MenuItem>
              <MenuItem icon={<FiLogOut />}>Kijelentkezés</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
  
}

export default SideBar;
