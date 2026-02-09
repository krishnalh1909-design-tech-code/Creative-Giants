import { Outlet } from "react-router-dom";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";

const PageLayout = () => {
  return (
    <>
      <main className="page">
        <CustomCursor/>
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;
