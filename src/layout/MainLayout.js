import SideBar from "./SideBar";
import classes from "./MainLayout.module.css";

const MainLayout = props => {
  return (
    <>
      <div className={classes.flexcontainer}>
        <div className={classes.sideBar}>
          <SideBar 
            allStudent="/studentList"
            newStudent="/addStudent"
          />
        </div>
        <div className={classes.maincontent}>
            {props.children}
        </div>
      </div>
    </>
  );
  
}

export default MainLayout;
