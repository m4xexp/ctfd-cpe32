import React from "react";
import logo from "assets/ctf-logo.svg";
type NavbarProps = {};

function Navbar({}: NavbarProps) {
  return (
    <>
      <div className="h-20 bg-[#0A0527] px-8 flex items-center justify-between shadow-md">
        <div className="flex items-center justify-center">
          <a href="/">
            <img src={logo} alt="ctfd-32" className="w-20 h-full" />
          </a>

          <a href="/">
            <h6 className="ml-24 text-white hover:text-[#0FB1D9] ease-in-out duration-300">
              Home
            </h6>
          </a>
        </div>
        <div className="flex gap-6">
          <a href="/signup">
            <h6 className="text-[#0FB1D9] hover:text-white ease-in-out duration-300">
              Sign up
            </h6>
          </a>
          <a href="/signin">
            <h6 className="text-[#0FB1D9] hover:text-white ease-in-out duration-300">
              Sign in
            </h6>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
