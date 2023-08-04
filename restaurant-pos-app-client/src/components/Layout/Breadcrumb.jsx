import { Link } from "react-router-dom";

const Breadcrumb = ({ pathname, txtFrom = "Root" }) => {
  const segments = pathname.split("/").filter((segment) => segment !== "");
  return (
    <div className="bg-transparent">
      <p className="text-gray-600">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span> / {txtFrom}</span>
        {segments.map((segment, index) => (
          <span key={segment}>
            <span className=""> / </span>
            <span
              to={`/${segments.slice(0, index + 1).join("/")}`}
              className="text-cyan-600"
            >
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </span>
          </span>
        ))}
      </p>
    </div>
  );
};

export default Breadcrumb;
