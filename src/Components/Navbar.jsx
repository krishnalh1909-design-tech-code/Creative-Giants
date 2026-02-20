import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  menuBg = "bg-black",
  menuText = "text-white",
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const links = [
    { name: "Home", path: "/", delay: "delay-[600ms]" },
    { name: "Projects", path: "/projects", delay: "delay-[700ms]" },
    { name: "Process", path: "/process", delay: "delay-[800ms]" },
    { name: "Latest News", path: "/news", delay: "delay-[900ms]" },
    { name: "Contact", path: "/contact", delay: "delay-[1000ms]" },
  ];

  return (
    <>
      {/* Full Screen Menu */}
      <div
        className={`px-8 flex items-end fixed left-0 w-full h-screen bg-black z-100
        transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
        ${open ? "top-0" : "-top-full delay-200"}`}
      >
        <div className="h-full w-[0%] lg:w-[25%]" />

        {/* Menu Items */}
        <div className="h-[85%] w-full lg:w-[50%] font-[Light] text-4xl lg:text-7xl text-white">

          {links.map((link) => (
            <div
              key={link.name}
              className="overflow-hidden py-2.5 cursor-pointer"
              onClick={() => {
                navigate(link.path);
                setOpen(false);
              }}
              onMouseEnter={() => setHovered(link.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* BOX WRAPPER */}
              <div className="overflow-hidden">
                <h1
                  data-cursor="large"
                  className={`
          transform pb-2
          transition-transform
          duration-700
          ease-[cubic-bezier(0.76,0,0.24,1)]
          ${open ? "translate-y-0" : "translate-y-full"}
          ${link.delay}
          ${hovered && hovered !== link.name ? "text-white/30" : "text-white"}
        `}
                >
                  {link.name}
                </h1>
              </div>
            </div>
          ))}

        </div>

        <div className="h-full w-[0%] lg:w-[25%]" />
      </div>

      {/* Menu Button */}
      <div
        data-cursor="large"
        onClick={() => setOpen((prev) => !prev)}
        className={`overflow-hidden cursor-pointer font-[Regular] w-20 h-[50px] lg:w-[100px] rounded-[30px] fixed right-3 top-5 lg:top-8 lg:right-8 z-150 border-2 border-[#ffffffb1] ${menuBg} ${menuText}`}
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