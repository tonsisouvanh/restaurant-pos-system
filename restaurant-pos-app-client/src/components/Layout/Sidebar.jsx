import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiLogoMastercard } from "react-icons/bi";
import { sidebarItems } from "../../data";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
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
          <div className="border-b-[1px] pb-7 flex items-center justify-center gap-2">
            <div className="bg-primary rounded-lg p-2">
              <BiLogoMastercard className="text-2xl" />
            </div>
            <h2 className="text-2xl font-bold">AEAT</h2>
          </div>
          {/* //* Sidebar menu */}
          <ul className="min-w-[15rem] space-y-3">
            {sidebarItems.map((item, index) => (
              <li key={index} className="space-y-3 group ">
                <Link
                  onClick={() => handleItemClick(item.id)}
                  to={item.to}
                  className={`flex p-3 items-center gap-3 rounded-md transition duration-300 ${
                    activeItemId === item.id
                      ? "bg-primary text-white"
                      : "bg-transparent"
                  } group-hover:bg-primary group-hover:text-white`}
                >
                  <div className="text-2xl">{item.icon}</div>
                  <span className="text-xl">{item.text}</span>
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
                    <SubMenu submenus={item.submenu}  />
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


