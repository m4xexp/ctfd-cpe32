import { CircleLeft, CircleRight } from "components/Circle";
import { DotLeft, DotRight } from "components/Dot";
import React, { useState } from "react";

import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

type Props = {};

function SignupPage(props: Props) {
  const [toggleHidsPassword, setToggleHidePassword] = useState(true);

  return (
    <>
      <div
        style={{ minHeight: "calc(100vh - (80px))" }}
        className="flex justify-center items-center relative min-h-screen overflow-hidden bg-primary
                    "
      >
        <CircleLeft />
        <CircleRight />

        <div className="relative p-8">
          <DotLeft className="bottom-0" />
          <div className="flex flex-col gap-6 w-96 p-8 rounded-xl bg-secondary">
            <h2 className="text-white font-bold text-4xl mb-2">Sign Up</h2>
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-white text-sm">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="text-white bg-primary px-4 py-2 rounded-xl h-12"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-white text-sm">
                Email
              </label>
              <input
                id="username"
                type="email"
                placeholder="Username"
                className="text-white bg-primary px-4 py-2 rounded-xl h-12"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-white text-sm">
                Password
              </label>
              <div className="relative block ">
                <button
                  className="absolute right-4 top-3"
                  onClick={() => setToggleHidePassword(!toggleHidsPassword)}
                >
                  {toggleHidsPassword ? (
                    <EyeOffIcon className="h-6 w-6 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-6 w-6 text-gray-400" />
                  )}
                </button>

                <input
                  id="username"
                  type={toggleHidsPassword ? "password" : "text"}
                  placeholder="Username"
                  className="text-white bg-primary px-4 py-2 rounded-xl h-12 w-full"
                />
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <a href="/signin">
                <h6 className="text-white text-opacity-50 text-xs hover:text-white">
                  Already have an account?
                </h6>
              </a>
              <button
                type="button"
                className={`py-3 px-4 bg-[#0062B9] text-white text-3xl font-semibold shadow-md rounded-xl`}
              >
                <h3 className="font-light text-sm leading-4 tracking-wide">
                  Continue
                </h3>
              </button>
            </div>
          </div>
          <DotRight className="top-0" />
        </div>
      </div>
    </>
  );
}

export default SignupPage;
