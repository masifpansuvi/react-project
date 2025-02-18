import React, { useState } from "react";
import "../App.css";
import { RxCaretDown } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch, IoIosHelpBuoy } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showTogle = () => {
    setToggle(true);
  };
  const hideTogle = () => {
    setToggle(false);
  };
  const links = [
    {
      icon: <IoIosSearch />,
      name: "search",
    },
    {
      icon: <MdLocalOffer />,
      name: "offer",
    },
    {
      icon: <IoIosHelpBuoy />,
      name: "help",
    },
    {
      icon: "",
      name: "sign in",
    },
    {
      icon: <FaShoppingCart />,
      name: 'cart',
    },
  ];

  return (
    <>
      <div
        className="bg-overlay w-full h-full fixed duration-500"
        onClick={hideTogle}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[500px] h-full absolute bg-white duration-[600]"
        ></div>
      </div>

      <div className="p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1000px] mx-auto flex items-center">
          <div className="imageLogo max-w-[80px]">
            <img src="./images/logo.png" alt="logo" className="w-full" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-[black]">
              Ratanader
            </span>{" "}
            Rajastan jonagar, India{" "}
            <RxCaretDown
              onClick={showTogle}
              className="inline text-[0.9rem] text-[#fc8019]"
            />
          </div>

          <nav className="flex list-none ml-auto gap-8 text-[18px]">
            {
                links.map(
                    (link,index)=>{
                        return (
                            <li key={index} className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer">
                                {link.icon}
                                {link.name}
                            </li>
                        )
                    }
                )
            }
            
            
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
