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
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary
                    "
      >
        <CircleLeft />
        <CircleRight />

        <div className="relative p-8">
          <DotLeft className="bottom-0" />
          <div className="flex w-96 flex-col gap-6 rounded-xl bg-secondary p-8">
            <h2 className="mb-2 text-4xl font-bold text-white">Sign Up</h2>
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-sm text-white">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="h-12 rounded-xl bg-primary px-4 py-2 text-white"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-sm text-white">
                Email
              </label>
              <input
                id="username"
                type="email"
                placeholder="Username"
                className="h-12 rounded-xl bg-primary px-4 py-2 text-white"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-sm text-white">
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
                  className="h-12 w-full rounded-xl bg-primary px-4 py-2 text-white"
                />
              </div>
            </div>
            <div className="mt-2 flex w-full items-center justify-between">
              <a href="/signin">
                <h6 className="text-xs text-white text-opacity-50 hover:text-white">
                  Already have an account?
                </h6>
              </a>
              <button
                type="button"
                className={`rounded-xl bg-[#0062B9] py-3 px-4 text-3xl font-semibold text-white shadow-md`}
              >
                <h3 className="text-sm font-light leading-4 tracking-wide">
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
