import React from "react";
import logo from "../assets/logo 2.png";
import Button from "./reusable/Button";
import { Link } from "react-router-dom";
import { SignOutButton } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const path = useLocation();
  return (
    <nav className="w-full flex justify-between items-center py-4 px-4 lg:px-[4vw] ">
      <Link to="/" className="logo flex items-center ">
        <img src={logo} alt="" width={50} height={50} />
        <h1 className="raleway-bold lg:text-[2rem] uppercase ">Attendometer</h1>
      </Link>
      {path.pathname === "/dashboard" ? (
        <SignOutButton>
          <Link to='/login'>
            {" "}
            <Button className="font-bold raleway-regular btnHover">
              Logout
            </Button>
          </Link>
        </SignOutButton>
      ) : (
        <Link to="login">
          <Button className="font-bold raleway-regular btnHover">
            Get Started
          </Button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
