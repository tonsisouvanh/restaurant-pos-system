import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { sidebarItems } from "../../data";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import Logo from "../UI/Logo";
import useScreenWidth from "../../hooks/useScreenWidth";
import PropTypes from "prop-types";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const screenWidth = useScreenWidth();
  const { pathname } = useLocation();
  const getIdByPathname = (pathname) => {
    const item = sidebarItems.find((item) => {
      if (item.submenu) {
        return item.submenu.find((sub) => sub.to === pathname);
      } else {
        return item.to === pathname;
      }
    });
    return item ? item.id : null;
  };

  const [activeItemId, setActiveItemId] = useState(getIdByPathname(pathname));

  const handleItemClick = (itemId) => {
    setActiveItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  const variants = {
    open: {
      width: "300px",
      transition: {
        duration: 0.1,
      },
    },
    closed: {
      width: 0,
      transition: {
        duration: 0,
      },
    },
  };

  useEffect(() => {
    if (screenWidth >= 1024) {
      setOpenSidebar(true);
    }
  }, [screenWidth, setOpenSidebar]);

  return (
    <motion.div
      initial={{
        width: "300px",
      }}
      animate={openSidebar ? "open" : "closed"}
      variants={variants}
      className={`h-screen fixed shadow-2xl font-roboto md:sticky top-0 transition-all bg-white w-0 lg:w-[300px] lg:shadow-md text-gray-900 overflow-hidden z-20`}
    >
      {/* //* Sidebar container */}
      <div className="relative flex flex-col">
        <div className="space-y-5">
          <div className="bg-gray-200 py-5">
            <Logo />
          </div>
          {/* //* Sidebar menu */}
          {/* <div> */}
          <ul className="min-w-[15rem] px-5 space-y-3">
            {sidebarItems.map((item, index) => (
              <li key={index} className="space-y-3 group ">
                <Link
                  onClick={() => handleItemClick(item.id)}
                  to={item.to}
                  className={`flex p-3 items-center justify-between rounded-md transition duration-300 ${
                    activeItemId === item.id
                      ? "bg-primary text-white"
                      : "bg-transparent"
                  } group-hover:bg-primary group-hover:text-white`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-md">{item.text}</span>
                  </div>
                  {item.submenu && (
                    <motion.div
                      animate={
                        item.id === activeItemId
                          ? {
                              rotateX: 0,
                            }
                          : {
                              rotateX: 180,
                            }
                      }
                    >
                      <IoIosArrowDown />
                    </motion.div>
                  )}
                </Link>
                {item.submenu && (
                  <motion.ul
                    animate={
                      item.id === activeItemId
                        ? {
                            height: "fit-content",
                          }
                        : {
                            marginTop: 0,
                            height: 0,
                          }
                    }
                    className={`overflow-hidden pl-4 space-y-3 text-gray-600`}
                  >
                    <SubMenu submenus={item.submenu} />
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>
          {/* </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  openSidebar: PropTypes.bool.isRequired, // name prop should be a required string
  setOpenSidebar: PropTypes.func.isRequired, // name prop should be a required string
};
