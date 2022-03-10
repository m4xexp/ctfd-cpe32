import React from "react";

type DotLeftProps = {};

function DotLeft({}: DotLeftProps) {
  return (
    <div>
      <div className="flex flex-col absolute bottom-15 left-0">
        <div className="flex flex-col gap-3">
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
        </div>
        <div className="flex gap-3 mt-3 ">
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
        </div>
      </div>
    </div>
  );
}

export default DotLeft;
