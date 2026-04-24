import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4  bg-green-600  container mx-auto p-5">
      <Link to="/">
        <h2 className="text-xl font-bold text-white">Dev Academy</h2>
      </Link>
    </header>
  );
};

export default Header;
