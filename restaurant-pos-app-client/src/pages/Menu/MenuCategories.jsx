import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Layout/Breadcrumb";
import { menusMockData } from "../../data";
import { Button } from "@mui/material";
import { useState } from "react";
import AddMenu from "../../components/Layout/AddMenu";
import MenuCategoryList from '../../components/List/Menu/MenuCategoryList'
const headCells = [
  {
    id: "category_name",
    numeric: false,
    disablePadding: false,
    label: "Category",
  },
];

const MenuCatgories = () => {
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
      {/* <MenuCategoryList dataCells={menusMockData} headCells={headCells} /> */}
    </div>
  );
};

export default MenuCatgories;
