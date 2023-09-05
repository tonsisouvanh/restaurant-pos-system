import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SubMenu = ({ submenus }) => {
  const { pathname } = useLocation();

  const getIdByPathname = (pathname) => {
    const item = submenus.find((item) => item.to === pathname);
    return item ? item.id : null;
  };

  const [subMenuActiveId, setSubMenuActiveId] = useState(
    getIdByPathname(pathname)
  );

  const handleItemClick = (itemId) => {
    setSubMenuActiveId(itemId);
  };

  return (
    <>
      {submenus.map((subitem) => (
        <li
          onClick={() => handleItemClick(subitem.id)}
          key={subitem.id}
          className={`cursor-pointer transition rounded-md ${
            subMenuActiveId === subitem.id
              ? "bg-primary/[10%] text-primary"
              : "bg-transparent"
          } hover:bg-primary/[10%]`}
        >
          <Link
            to={subitem.to}
            className={`p-3 w-full flex items-center gap-2 `}
          >
            <div className="text-xl">{subitem.icon}</div>
            <span className="text-sm">{subitem.text}</span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default SubMenu;
