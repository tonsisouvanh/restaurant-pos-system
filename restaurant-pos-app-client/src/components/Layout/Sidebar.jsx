import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { sidebarItems } from "../../data";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import Logo from "../UI/Logo";
const Sidebar = () => {
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

  return (
    <aside
      className={`h-screen shadow-xl font-gilroy sticky top-0 transition-all bg-white lg:w-[300px] text-gray-900`}
    >
      {/* //* Sidebar container */}
      <div className="p-4 flex flex-col items-center">
        <div className="space-y-12">
          <Logo />
          {/* //* Sidebar menu */}
          <ul className="min-w-[15rem] space-y-3">
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
                    <span className="text-xl">{item.text}</span>
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
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
