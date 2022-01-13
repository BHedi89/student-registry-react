import SideBar from "./SideBar";
import classes from "./MainLayout.module.css";

const MainLayout = props => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.sidebarcontainer}>
          <div className={classes.sidebar}>
            <SideBar 
              allStudent="/studentList"
              newStudent="/addStudent"
            />
          </div>
        </div>
        
        <div className={classes.flexcontainer}>
          <div className={classes.maincontent}>
              {props.children}
          </div>
        </div>
      </div>
    </>
  );
  
}

export default MainLayout;
