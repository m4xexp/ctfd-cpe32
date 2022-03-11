import React from "react";

type DotLeftProps = {
  className?: string;
};

function DotLeft({ className }: DotLeftProps) {
  return (
    <div>
      <div className={`bottom-15 absolute left-0 flex flex-col ${className}`}>
        <div className="flex flex-col gap-3">
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
        </div>
        <div className={`mt-3 flex gap-3`}>
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
        </div>
      </div>
    </div>
  );
}

export default DotLeft;
