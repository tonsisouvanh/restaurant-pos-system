import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogoMastercard, BiTable } from "react-icons/bi";
import { BsGrid1X2 } from "react-icons/bs";
import { MdShoppingBasket, MdRestaurantMenu } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import {
  IoSettingsOutline,
  IoLogOutOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

const sidebarItems = [
  {
    id: 0,
    text: "Dashboard",
    to: "/dashboard",
    icon: <BsGrid1X2 />,
  },
  {
    id: 1,
    text: "Orders",
    to: "/orders",
    icon: <MdShoppingBasket />,
  },
  {
    id: 2,
    text: "Menu",
    to: "/menu",
    icon: <MdRestaurantMenu />,
  },
  {
    id: 3,
    text: "Reservations",
    to: "/reservations",
    icon: <AiOutlineSchedule />,
  },
  {
    id: 4,
    text: "Settings",
    to: "/settings",
    icon: <IoSettingsOutline />,
  },
  {
    id: 5,
    text: "Profile",
    to: "/profile",
    icon: <IoPersonCircleOutline />,
  },
  {
    id: 6,
    text: "Logout",
    to: "/logout",
    icon: <IoLogOutOutline />,
  },
  {
    id: 7,
    text: "Tables",
    to: "/table",
    icon: <BiTable />,
  },
];

const Sidebar = () => {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemHover = (itemId) => {
    setActiveItemId(itemId);
  };
  return (
    <aside
      className={`h-screen shadow-xl font-gilroy sticky top-0 transition-all bg-white lg:w-[300px] text-gray-900`}
    >
      {/* Sidebar content */}
      <div className="p-4 flex flex-col items-center">
        <div className="space-y-12">
          <div className="border-b-[1px] pb-7 flex items-center justify-center gap-2">
            <div className="bg-primary rounded-lg p-2">
              <BiLogoMastercard className="text-2xl" />
            </div>
            <h2 className="text-2xl font-bold">AEAT</h2>
          </div>

          {/* Sidebar menu */}
          <ul className="min-w-[11rem] space-y-8">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleItemHover(item.id)}
                onMouseLeave={() => handleItemHover(null)}
                className="flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <div className="group-hover:text-primary transition group-hover:font-[800] text-xl text-textPrimary">
                    {item.icon}
                  </div>
                  <Link
                    to={item.to}
                    className="group-hover:text-primary transition group-hover:font-[700] text-textPrimary text-[18px]"
                  >
                    {item.text}
                  </Link>
                </div>

                <div
                  className={`bg-primary transition duration-500 ${
                    item.id === activeItemId
                      ? "opacity-1 visible"
                      : "opacity-0 invisible"
                  } w-3 h-3 rounded-full transition group-hover:font-[800] text-xl`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
