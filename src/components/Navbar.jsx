import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/Foodieland.(1).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function collapseToggler() {
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className="navbar bg-light shadow-sm navbar-expand-md p-3 d-flex align-items-center">
      <Link to="/" className="navbar-brand d-flex">
        <img src={logo} alt="" className="logo" />
      </Link>

      <button className="navbar-toggler border-0" onClick={collapseToggler}>
        <FontAwesomeIcon className="fs-2 text-dark" icon={faBars} />
      </button>

      <div className={`navbar-collapse ${isOpen ? "show" : ""}`}>
        <ul className="navbar-nav mx-auto text-center">
          <li className="nav-item mx-2 p-1 p-md-0">
            <NavLink
              className="text-decoration-none"
              style={({ isActive }) => {
                return { color: isActive ? "black" : "gray" };
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item mx-2 p-1 p-md-0">
            <NavLink
              className="text-decoration-none"
              style={({ isActive }) => {
                return { color: isActive ? "black" : "gray" };
              }}
              to="/Recipts"
            >
              Recipts
            </NavLink>
          </li>
          <li className="nav-item mx-2 p-1 p-md-0">
            <NavLink
              className="text-decoration-none"
              style={({ isActive }) => {
                return { color: isActive ? "black" : "gray" };
              }}
              to="/Blog"
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item mx-2 p-1 p-md-0">
            <NavLink
              className="text-decoration-none"
              style={({ isActive }) => {
                return { color: isActive ? "black" : "gray" };
              }}
              to="/Contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item mx-2 p-1 p-md-0">
            <NavLink
              className="text-decoration-none"
              style={({ isActive }) => {
                return { color: isActive ? "black" : "gray" };
              }}
              to="/AboutUs"
            >
              About Us
            </NavLink>
          </li>
        </ul>

        <div className="socials ms-auto d-flex justify-content-around mt-2">
          <Link className="me-2">
            <FontAwesomeIcon className="text-primary fs-3" icon={faFacebook} />
          </Link>
          <Link className="me-2">
            <FontAwesomeIcon className="text-black fs-3" icon={faXTwitter} />
          </Link>
          <Link className="me-2">
            <FontAwesomeIcon className="text-danger fs-3" icon={faInstagram} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
