import { BsGrid1X2 } from "react-icons/bs";
import { MdShoppingBasket, MdRestaurantMenu } from "react-icons/md";
import { BiTable } from "react-icons/bi";
import {
  AiOutlineSchedule,
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
} from "react-icons/ai";

import {
  FaBars,
  FaUtensils,
  FaFolder,
  FaClipboardList,
  FaTachometerAlt,
  FaChartBar,
  FaListAlt,
  FaCube,
  FaBox,
  FaFolderOpen ,
  FaTags 
} from "react-icons/fa";

const sidebarItems = [
  {
    id: 0,
    text: "Dashboard",
    icon: <FaChartBar />,
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
    icon: <FaClipboardList />,
  },
  {
    id: 2,
    text: "Menus/Items",
    icon: <FaBars />,
    submenu: [
      {
        id: 20,
        text: "Menus",
        to: "/menus",
        icon: <FaUtensils />,
      },
      {
        id: 21,
        text: "Menu Categories",
        to: "/categories",
        icon: <FaFolder />,
      },
      {
        id: 22,
        text: "Manage Menus",
        to: "/manage-menus",
        icon: <FaListAlt />,
      },
      {
        id: 23,
        text: "Items",
        to: "/items",
        icon: <FaCube />,
      },
      {
        id: 24,
        text: "Items Categories",
        to: "/categories",
        icon: <FaTags />,
      },
      {
        id: 25,
        text: "Manage Items",
        to: "/manage-items",
        icon: <FaListAlt />,
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
  {
    id: 5,
    text: "Test",
    to: "/test",
    icon: <BiTable />,
  },
];

const menuItems = [
  // your menuItems array object here...
];

const otherData = [
  // your otherData array object here...
];

// Export each array object as separate variables
export { sidebarItems, menuItems, otherData };
