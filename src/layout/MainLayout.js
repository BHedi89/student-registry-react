import { Component } from "react";
import SideBar from "./SideBar";
import classes from "./MainLayout.module.css";

class MainLayout extends Component {
  render() {
    return (
      <>
        <div className={classes.flexcontainer}>
          <div className={classes.sideBar}>
            <SideBar />
          </div>
          <div className={classes.maincontent}>
              {this.props.children}
          </div>
        </div>
      </>
    );
  }
}

export default MainLayout;
