import { BiLogoMastercard } from "react-icons/bi";

const Logo = ({ logoSize = "text-4xl", textSize = "text-2xl" }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="bg-primary rounded-lg p-2">
        <BiLogoMastercard className={`${logoSize} text-white`} />
      </div>
      <h2 className={`${textSize} font-montserrat font-bold`}>FSTeam</h2>
    </div>
  );
};

export default Logo;
