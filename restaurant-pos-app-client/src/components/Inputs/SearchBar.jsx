import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ onChange, classname = "" }) => {
  return (
    <div
      className={`relative rounded-md flex items-center border max-w-[20rem] ${classname}`}
    >
      <div className="absolute left-3">
        <AiOutlineSearch className="h-5 w-5 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="py-2 pl-10 pr-3 bg-transparent rounded-md outline-none bg-white focus:outline-none focus:ring focus:border-primary focus:rounde-md w-[40rem]"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
