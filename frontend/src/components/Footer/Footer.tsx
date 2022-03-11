import React from "react";
import logo from "assets/ctf-logo.svg";
type Props = {};

function Footer({}: Props) {
  return (
    <>
      <div className="h-52 w-full bg-[#0A0527]">
        <div className="flex items-center gap-12 px-6 py-3">
          <img src={logo} alt="ctfd-32" className="h-44 w-44" />
          <h6 className="font-light text-[#52AEFF]">
            take your cybersecurity skills to the next level through the most
            captivating, gamified, hands-on training experience!
          </h6>
        </div>
      </div>
    </>
  );
}

export default Footer;
