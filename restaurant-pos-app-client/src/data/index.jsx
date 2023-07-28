import { BsGrid1X2 } from "react-icons/bs";
import { MdShoppingBasket, MdRestaurantMenu } from "react-icons/md";
import { BiLogoMastercard, BiTable } from "react-icons/bi";
import {
  AiOutlineSchedule,
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
} from "react-icons/ai";

const sidebarItems = [
  {
    id: 0,
    text: "Dashboard",
    // to: "#",
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
    // to: "#",
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
        to: "/categories",
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
  {
    id: 4,
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
