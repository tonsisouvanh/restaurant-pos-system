import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import images from "../../assets";
const options = [
  {
    value: "en",
    text: "ENG",
    img: images.english,
  },
  {
    value: "la",
    text: "LA",
    img: images.laos,
  },
  {
    value: "vn",
    text: "VN",
    img: images.vietnam,
  },
];

const LanguageSelect = () => {
  const [t, i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(i18n.language);

  const getImgByValue = (lang) => {
    return options.find((op) => op.value === lang).img;
  };

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
    setSelectedValue(value);
    setIsOpen(false);
  };

  const divRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    // <div ref={divRef} className="relative w-fit">
    //   <div
    //     className="w-full cursor-pointer shadow-lg rounded border bg-white bg-opacity-80 py-2 px-4 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500"
    //     tabIndex={1}
    //     onClick={() => setIsOpen(!isOpen)}
    //   >
    //     {selectedValue ? (
    //       //   <span>{options.find((op) => op.value === selectedValue).text}</span>
    //       <div className="flex items-center justify-between gap-4 text-gray-700">
    //         <img
    //           className="w-6 h-6"
    //           src={getImgByValue(selectedValue)}
    //           alt=""
    //         />
    //         <IoIosArrowDown className="text-gray-700" />
    //       </div>
    //     ) : (
    //       <div className="flex items-center justify-between gap-4 text-gray-700">
    //         {/* <div className="flex items-center gap-2"> */}
    //         {/* <span className="text-lg">{i18n.language.toUpperCase()}</span> */}
    //         <img
    //           className="w-6 h-6"
    //           src={getImgByValue(i18n.language)}
    //           alt=""
    //         />
    //         {/* </div> */}
    //         <IoIosArrowDown className="text-gray-700" />
    //       </div>
    //     )}
    //   </div>
    //   {isOpen && (
    //     <motion.div className="absolute z-10 mt-1 w-full rounded border border-gray-300 bg-white text-black">
    //       {options.map((option, index) => (
    //         <div
    //           key={index}
    //           className="cursor-pointer px-3 py-2 hover:bg-gray-100"
    //           onClick={() => handleLanguageChange(option.value)}
    //         >
    //           {option.text}
    //         </div>
    //       ))}
    //     </motion.div>
    //   )}
    // </div>

    <div ref={divRef} className="relative min-w-fit">
      <div
        className="w-full cursor-pointer bg-white bg-opacity-80 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out "
        tabIndex={1}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue ? (
          <div className="flex items-center justify-between gap-4 text-gray-700">
            <img
              className="w-6 h-6"
              src={getImgByValue(selectedValue)}
              alt=""
            />
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4 text-gray-700">
            <img
              className="w-6 h-6"
              src={getImgByValue(i18n.language)}
              alt=""
            />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="absolute top-7 -left-[0.25rem] w-[2rem]">
          <div className="shadow-md space-y-2 z-10 mt-1 p-1 bg-transparent bg-white rounded-full text-black">
            {options
              .filter((item) => item.value !== selectedValue)
              .map((option, index) => (
                <img
                  src={option.img}
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleLanguageChange(option.value)}
                  alt=""
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
