import { Outlet } from "react-router-dom";
import CustomCursor from "./CustomCursor";

const PageLayout = () => {
  return (
    <>
      <CustomCursor />
      <Outlet />
    </>
  );
};

export default PageLayout;
