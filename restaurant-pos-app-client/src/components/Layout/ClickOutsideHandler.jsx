import { useEffect, useRef } from "react";

const ClickOutsideHandler = ({ children, setIsOpen }) => {
  const divRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsOpen(false); // Call the onClickOutside callback when clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen]);

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
