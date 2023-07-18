import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiLogoMastercard, BiTable } from "react-icons/bi";
import { BsGrid1X2 } from "react-icons/bs";
import { MdShoppingBasket, MdRestaurantMenu } from "react-icons/md";
import {
  AiOutlineSchedule,
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
} from "react-icons/ai";

const sidebarItems = [
  {
    id: 0,
    text: "Dashboard",
    to: "#",
    icon: <BsGrid1X2 />,
    submenu: [
      {
        id: 101,
        text: "Analys",
        to: "/",
        icon: <AiOutlineUnorderedList />,
      },
      {
        id: 102,
        text: "Ecommerce",
        to: "/test",
        icon: <AiOutlineShoppingCart />,
      },
    ],
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
    to: "#",
    icon: <MdRestaurantMenu />,
    submenu: [
      {
        id: 20,
        text: "All menus",
        to: "/menus",
        icon: <AiOutlineShoppingCart />,
      },
      {
        id: 21,
        text: "Categories",
        to: "#",
        icon: <AiOutlineUnorderedList />,
      },
    ],
  },
  {
    id: 3,
    text: "Reservations",
    to: "/reservations",
    icon: <AiOutlineSchedule />,
  },
  {
    id: 4,
    text: "Tables",
    to: "/tables",
    icon: <BiTable />,
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const getIdByPathname = (pathname) => {
    const item = sidebarItems.find((item) => item.to === pathname);
    return item ? item.id : null;
  };
  const [activeItemId, setActiveItemId] = useState(getIdByPathname(pathname));

  const handleItemClick = (itemId) => {
    setActiveItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };
  console.log(pathname, activeItemId);
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
                  className={`flex p-3 items-center gap-3 rounded-md ${
                    activeItemId === item.id
                      ? "bg-primary text-white"
                      : "bg-transparent"
                  } group-hover:bg-primary group-hover:text-white`}
                >
                  <div className="transition text-xl ">{item.icon}</div>
                  <span className="text-xl">{item.text}</span>
                </Link>
                {item.submenu && (
                  <ul
                    className={`${
                      item.id === activeItemId ? null : "hidden"
                    } pl-4 space-y-3 text-slate-600`}
                  >
                    {item.submenu.map((subitem) => (
                      <li key={subitem.id} className="">
                        <Link
                          to={subitem.to}
                          className={`flex items-center gap-2 `}
                          // className="group-hover:text-primary transition group-hover:font-[700] text-textPrimary text-[15px]"
                        >
                          <div>{subitem.icon}</div>
                          <span className="text-lg">{subitem.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
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
