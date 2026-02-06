import { Outlet } from "react-router-dom";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";

const PageLayout = () => {
  return (
    <>
      <CustomCursor />
      <Outlet />
    </>
  );
};

export default PageLayout;
