import PropTypes from "prop-types";

import SearchBar from "../Inputs/Searchbar";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { RxDropdownMenu } from "react-icons/rx";

import { useContext } from "react";

import { UserContext } from "../../context/UserContext";
import UserProfileMenu from "./UserProfileMenu";
import ClickOutsideHandler from "./ClickOutsideHandler";

const Header = ({ hasNotification, setOpenSidebar, openSidebar, divRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value) => {
    // Do something with the search value in Component1
    setSearchQuery(value);
  };

  return (
    <header
      // ref={divRef}
      className="relative flex items-center justify-between min-h-[4rem] px-4 bg-white"
    >
      {/* //*TODO Branding */}
      {/* <div className="font-bold text-2xl">
        <h2 className="whitespace-nowrap">
          {user.name || "Hello Kruluz Utsman"}
        </h2>
        <span className="text-base font-[400] whitespace-nowrap text-[#707EAE]">
          4.45 pm 19 Jan 2022
        </span>
      </div> */}

      <div onClick={() => setOpenSidebar(!openSidebar)}>
        <BiMenuAltLeft className="text-2xl cursor-pointer" />
      </div>
      <SearchBar classname={"hidden lg:flex"} onChange={handleSearch} />
      <ClickOutsideHandler setIsOpen={setIsOpen}>
        <UserProfileMenu
          hasNotification={hasNotification}
          userName={"Kruluz Utsman"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl cursor-pointer lg:hidden"
        >
          <RxDropdownMenu />
        </div>
      </ClickOutsideHandler>
    </header>
  );
};

export default Header;

Header.propTypes = {
  hasNotification: PropTypes.bool.isRequired, // name prop should be a required string
  openSidebar: PropTypes.bool.isRequired, // name prop should be a required string
  setOpenSidebar: PropTypes.func.isRequired, // name prop should be a required string
  // divRef: PropTypes.Ref.isRequired,
};
