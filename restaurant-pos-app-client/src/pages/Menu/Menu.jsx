import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import { menusMockData } from "../../data";
import { Button } from "@mui/material";
import AddMenu from "../../components/Layout/AddMenu";
import { useState } from "react";
import MenuList from "../../components/List/Menu/MenuList";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "category_name",
    numeric: false,
    disablePadding: false,
    label: "Category",
  },
  {
    id: "image",
    numeric: false,
    disablePadding: false,
    label: "Image",
  },

];

const Menu = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className="">
      <AddMenu open={open} setOpen={setOpen} />
      <div className="flex items-center justify-between mb-4">
        <Breadcrumb pathname={location.pathname} txtFrom="Menus-Items" />
        <Button
          onClick={handleOpen}
          className="bg-cyan-600 text-white hover:bg-cyan-700"
        >
          ADD MENU
        </Button>
      </div>
      <MenuList dataCells={menusMockData} headCells={headCells} />
    </div>
  );
};

export default Menu;
