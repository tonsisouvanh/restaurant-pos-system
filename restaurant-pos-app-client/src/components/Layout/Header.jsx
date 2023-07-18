import { Link } from "react-router-dom";
import { IoPersonCircleOutline, IoLogOutOutline } from "react-icons/io5";
import SearchBar from "../Inputs/Searchbar";
import { useState } from "react";
import { BsBell } from "react-icons/bs";

const Header = ({ hasNotification }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value) => {
    // Do something with the search value in Component1
    setSearchQuery(value);
  };
  return (
    <header className="bg-white py-4 px-8 flex flex-wrap items-center justify-between gap-10">
      {/* Branding */}
      <div className="font-bold text-2xl">
        <h2 className="whitespace-nowrap">Hello Kruluz Utsman</h2>
        <span className="text-base font-[400] text-[#707EAE]">
          4.45 pm 19 Jan 2022
        </span>
      </div>
      {/* search bar */}
      <SearchBar onChange={handleSearch} />

      {/* User Profile and Logout */}
      <div className="flex items-center space-x-5">
        <div className="relative rounded-lg shadow-md p-2 bg-white">
          <div className="flex items-center justify-center">
            <BsBell className=" h-6 w-6"></BsBell>
            {!hasNotification && (
              <span className="absolute top-2 right-2 h-3 w-3 bg-pink-600 rounded-full"></span>
            )}
          </div>
        </div>
        {/* User Profile */}
        <h2 className="whitespace-nowrap font-[500]">Kruluz Utsman</h2>
        <img
          className="rounde-md w-11 h-11 object-cover rounded-md"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
