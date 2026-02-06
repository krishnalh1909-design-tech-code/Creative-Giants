import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  menuBg = "bg-black",
  menuText = "text-white",
}) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const menuItem =
    "transition-all duration-700 ease-out transform";

  const active = "translate-y-0 opacity-100";
  const inactive = "translate-y-full opacity-0";


  return (
    <>
      <div className={`px-8 flex items-end fixed left-0 w-full h-screen bg-black z-40
        transition-all duration-700 ease-in-out
        ${open ? "top-0" : "-top-full"}`}
      >
        <div className="h-full w-[0%] lg:w-[25%]">
        </div>

        <div className="h-[85%] w-fulllg:w-[50%]  font-[Light] text-white text-4xl lg:text-7xl ">

          <div onClick={() => navigate("/")} className="overflow-hidden  py-2.5">
            <h1
              className={`${menuItem} ${open ? active : inactive} delay-600`}
            >
              Home
            </h1>
          </div>

          <div onClick={() => navigate("/projects")} className="overflow-hidden py-2.5">
            <h1
              className={`${menuItem} ${open ? active : inactive} delay-650`}
            >
              Projects
            </h1>
          </div>

          <div onClick={() => navigate("/process")} className="overflow-hidden  py-2.5">
            <h1
              className={`${menuItem} ${open ? active : inactive} delay-700`}
            >
              Process
            </h1>
          </div>

          <div onClick={() => navigate("/news")} className="overflow-hidden  py-2.5">
            <h1
              className={`${menuItem} ${open ? active : inactive} delay-750`}
            >
              Latest News
            </h1>
          </div>

          <div onClick={() => navigate("/contact")} className="overflow-hidden  py-2.5">
            <h1
              className={`${menuItem} ${open ? active : inactive} delay-800`}
            >
              Contact
            </h1>
          </div>

        </div>

        <div className="h-full w-[0%] lg:w-[25%]" >
        </div>
      </div>

      <div
        onClick={() => setOpen(prev => !prev)}
        className={`overflow-hidden cursor-pointer w-[90px] h-[50px] lg:w-[100px] rounded-[30px] fixed right-3 top-5 lg:top-8 lg:right-8 z-100 border-[0.2px] border-gray-50 ${menuBg} ${menuText}`}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out ${open ? "-translate-y-full" : "translate-y-0"
            }`}
        >
          MENU
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out ${open ? "translate-y-0" : "translate-y-full"
            }`}
        >
          CLOSE
        </div>
      </div>
    </>
  );
};

export default Navbar;
