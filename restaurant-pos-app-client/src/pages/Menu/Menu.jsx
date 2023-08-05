import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Layout/Breadcrumb";

const Menu = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        <Breadcrumb pathname={location.pathname} txtFrom="Menus-Items" />
      </div>
    </div>
  );
};

export default Menu;
