import React from "react";

type DotRightProps = {
  className?: string;
};

function DotRight({ className }: DotRightProps) {
  return (
    <div>
      <div
        className={`absolute top-1.5 right-0 flex rotate-180 flex-col ${className}`}
      >
        <div className="flex flex-col gap-3">
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
        </div>
        <div className="mt-3 flex gap-3">
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
          <div className="h-5 w-5 rounded-full bg-[#0062B9]"></div>
        </div>
      </div>
    </div>
  );
}

export default DotRight;
