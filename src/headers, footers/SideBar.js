import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import { Component } from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      menuCollapse: false,
    };
  }

  menuIconClick = () => {
    this.state.menuCollapse
      ? this.setState({ menuCollapse: false })
      : this.setState({ menuCollapse: true });
  };

  render() {
    return (
      <>
        <div id="header">
          <ProSidebar collapsed={this.state.menuCollapse}>
            <SidebarHeader>
              <div className="closemenu" onClick={this.menuIconClick}>
                {this.state.menuCollapse ? (
                  <FontAwesomeIcon icon={faBars} className="icon" />
                ) : (
                  <FontAwesomeIcon icon={faTimes} className="icon" />
                )}
              </div>
            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem active={true} icon={<FiHome />}>
                  Home
                </MenuItem>
                <MenuItem icon={<FaList />}>Category</MenuItem>
                <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
                <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
                <MenuItem icon={<BiCog />}>Settings</MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
      </>
    );
  }
}

export default SideBar;
