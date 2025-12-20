import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 px-8 py-4 shadow">
      <h1 className="text-blue-500 text-3xl font-bold">My App</h1>

      <nav>
        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">About</Link>
          </li>

          <li>
            <Link to="/contact-us" className="hover:text-blue-500">Contact Us</Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-blue-500">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
