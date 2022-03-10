import React from "react";

type DotRightProps = {
  className?: string;
};

function DotRight({ className }: DotRightProps) {
  return (
    <div>
      <div
        className={`flex flex-col rotate-180 absolute top-1.5 right-0 ${className}`}
      >
        <div className="flex flex-col gap-3">
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
        </div>
        <div className="flex gap-3 mt-3">
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
        </div>
      </div>
    </div>
  );
}

export default DotRight;
