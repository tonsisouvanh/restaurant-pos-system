import { useEffect, useRef } from "react";
import useScreenWidth from "../../hooks/useScreenWidth";

const ClickOutsideHandler = ({ children, setIsOpen }) => {
  const sreenWidth = useScreenWidth();
  const divRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        if (sreenWidth <= 1024) setIsOpen(false); // Call the onClickOutside callback when clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen, sreenWidth]);

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  return (
    <div ref={divRef} onClick={handleClickInside}>
      {children}
    </div>
  );
};

export default ClickOutsideHandler;
