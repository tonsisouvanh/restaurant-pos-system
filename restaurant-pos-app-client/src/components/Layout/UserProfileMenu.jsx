import LanguageSelect from "../Selects/LanguageSelect";
import { BsBell } from "react-icons/bs";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const UserProfileMenu = ({ hasNotification, userName, isOpen }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      y: "-10px",
      opacity: 0,
      display: "none",
      transition: {
        duration: 0.1,
      },
    },
  };
  return (
    <>
      {/* Responsive view */}
      <motion.div
        initial={{
          y: "-100px",
          opacity: 0,
        }}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="absolute top-12 right-5 lg:hidden"
      >
        {/* //TODO User Profile and Logout */}
        <div className=" space-x-5 flex items-center justify-between bg-white border rounded-lg shadow-md p-3">
          {/* //TODO search bar */}
          <div className="relative rounded-lg shadow-md p-2 bg-white">
            <div className="flex items-center justify-center">
              <BsBell className="h-6 w-6"></BsBell>
              {hasNotification && (
                <span className="absolute top-2 right-2 h-3 w-3 bg-pink-600 rounded-full"></span>
              )}
            </div>
          </div>
          {/* //TODO User Profile */}
          <h2 className="whitespace-nowrap font-[500]">{userName}</h2>
          <img
            className="rounde-md min-w-[3rem] h-[3rem] object-cover rounded-md"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          {/* //TODO Language select */}
          <LanguageSelect />
        </div>
      </motion.div>

      {/* Desktop view */}
      <div className="hidden gap-10 lg:flex lg:items-center lg:justify-between">
        {/* //TODO User Profile and Logout */}
        <div className="items-center space-x-5 lg:flex">
          {/* //TODO search bar */}
          <div className="relative rounded-lg shadow-md p-2 bg-white">
            <div className="flex items-center justify-center">
              <BsBell className="h-6 w-6"></BsBell>
              {hasNotification && (
                <span className="absolute top-2 right-2 h-3 w-3 bg-pink-600 rounded-full"></span>
              )}
            </div>
          </div>
          {/* //TODO User Profile */}
          <h2 className="whitespace-nowrap font-[500]">{userName}</h2>
          <img
            className="rounde-md min-w-[3rem] h-[3rem] object-cover rounded-md"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          {/* //TODO Language select */}
          <LanguageSelect />
        </div>
      </div>
    </>
  );
};

export default UserProfileMenu;

UserProfileMenu.propTypes = {
  hasNotification: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
