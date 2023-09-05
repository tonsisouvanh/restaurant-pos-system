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
  FaFolderOpen,
  FaTags,
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
];

const categoriesData = [
  { category_id: 1, name: "Appetizers" },
  { category_id: 2, name: "Main Course" },
  { category_id: 3, name: "Desserts" },
  { category_id: 4, name: "Beverages" },
  { category_id: 5, name: "Salads" },
  { category_id: 6, name: "Soups" },
  { category_id: 7, name: "Specials" },
  { category_id: 8, name: "Side Dishes" },
  { category_id: 9, name: "Combos" },
  { category_id: 10, name: "Kids Menu" },
];

const menusData = [
  {
    name: "Vegetable Spring Rolls",
    description: "Crispy vegetable spring rolls served with dipping sauce.",
    price: 49900,
    category_id: 1,
    image:
      "https://www.seriouseats.com/thmb/UsCFip8x4eIQV5efp7gAsEOnwf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Gaeng-Som-Jai-Williams-fc4642cca0d6436da9c963bc58a2f42a.jpg",
  },
  {
    name: "Grilled Salmon",
    description: "Fresh grilled salmon seasoned with herbs and lemon.",
    price: 125000,
    category_id: 2,
    image:
      "https://www.seriouseats.com/thmb/UsCFip8x4eIQV5efp7gAsEOnwf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Gaeng-Som-Jai-Williams-fc4642cca0d6436da9c963bc58a2f42a.jpg",
  },
  {
    name: "Chocolate Fudge Cake",
    description: "Decadent chocolate cake topped with fudge sauce.",
    price: 35900,
    category_id: 3,
    image:
      "https://www.seriouseats.com/thmb/UsCFip8x4eIQV5efp7gAsEOnwf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Gaeng-Som-Jai-Williams-fc4642cca0d6436da9c963bc58a2f42a.jpg",
  },
  {
    name: "Iced Coffee",
    description: "Refreshing iced coffee with a hint of caramel.",
    price: 9990,
    category_id: 4,
    image:
      "https://www.seriouseats.com/thmb/UsCFip8x4eIQV5efp7gAsEOnwf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Gaeng-Som-Jai-Williams-fc4642cca0d6436da9c963bc58a2f42a.jpg",
  },
  {
    name: "Greek Salad",
    description:
      "Classic Greek salad with tomatoes, cucumbers, olives, and feta cheese.",
    price: 35000,
    category_id: 5,
    image:
      "https://www.seriouseats.com/thmb/UsCFip8x4eIQV5efp7gAsEOnwf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Gaeng-Som-Jai-Williams-fc4642cca0d6436da9c963bc58a2f42a.jpg",
  },
  {
    name: "Tomato Basil Soup",
    description: "Creamy tomato soup with fresh basil.",
    price: 24900,
    category_id: 6,
    image:
      "https://www.seriouseats.com/thmb/UsCFip8x4eIQV5efp7gAsEOnwf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Gaeng-Som-Jai-Williams-fc4642cca0d6436da9c963bc58a2f42a.jpg",
  },
  {
    name: "Chef's Special",
    description: "Chef's special dish with a mix of flavors.",
    price: 79900,
    category_id: 7,
    image:
      "https://www.seriouseats.com/thmb/UsCFip8x4eIQV5efp7gAsEOnwf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Gaeng-Som-Jai-Williams-fc4642cca0d6436da9c963bc58a2f42a.jpg",
  },
  {
    name: "Garlic Bread",
    description: "Garlic-flavored bread slices, perfect as a side.",
    price: 25000,
    category_id: 8,
    image:
      "https://www.seriouseats.com/thmb/UsCFip8x4eIQV5efp7gAsEOnwf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Gaeng-Som-Jai-Williams-fc4642cca0d6436da9c963bc58a2f42a.jpg",
  },
  {
    name: "Family Combo",
    description: "A combo meal for the whole family.",
    price: 299900,
    category_id: 9,
    image:
      "https://www.seriouseats.com/thmb/UsCFip8x4eIQV5efp7gAsEOnwf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Gaeng-Som-Jai-Williams-fc4642cca0d6436da9c963bc58a2f42a.jpg",
  },
  {
    name: "Kids Cheeseburger",
    description: "Kids-sized cheeseburger with fries.",
    price: 69900,
    category_id: 10,
    image:
      "https://www.seriouseats.com/thmb/UsCFip8x4eIQV5efp7gAsEOnwf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Gaeng-Som-Jai-Williams-fc4642cca0d6436da9c963bc58a2f42a.jpg",
  },
];

const menusMockData = menusData.map(({ category_id, ...menu }) => ({
  ...menu,
  category_name: categoriesData.find(
    (category) => category.category_id === category_id
  ).name,
}));
// Export each array object as separate variables
export { sidebarItems, menusMockData,categoriesData };
