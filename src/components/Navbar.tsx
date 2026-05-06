import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-background shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-foreground">
            Front Boilerplate
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="nav-link"
              data-active={location.pathname === "/"}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link"
              data-active={location.pathname === "/about"}
            >
              About
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
