import React from "react";
import logo from "assets/ctf-logo.svg";
type NavbarProps = {};

function Navbar({}: NavbarProps) {
  return (
    <>
      <div className="flex h-20 items-center justify-between bg-[#0A0527] px-8 shadow-md">
        <div className="flex items-center justify-center">
          <a href="/">
            <img src={logo} alt="ctfd-32" className="h-full w-20" />
          </a>

          <a href="/">
            <h6 className="ml-24 text-white duration-300 ease-in-out hover:text-[#0FB1D9]">
              Home
            </h6>
          </a>
        </div>
        <div className="flex gap-6">
          <a href="/signup">
            <h6 className="text-[#0FB1D9] duration-300 ease-in-out hover:text-white">
              Sign up
            </h6>
          </a>
          <a href="/signin">
            <h6 className="text-[#0FB1D9] duration-300 ease-in-out hover:text-white">
              Sign in
            </h6>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
