import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

type Props = {
  prevStep: () => void;
  nextStep: () => void;
  formTitle?: string;
};

function PasswordStep(props: Props) {
  const [toggleHidsPassword, setToggleHidePassword] = useState(true);
  const { prevStep, nextStep, formTitle } = props;
  return (
    <>
      <h2 className="text-white font-bold text-4xl mb-2">{formTitle}</h2>
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
            id="password"
            type={toggleHidsPassword ? "password" : "text"}
            placeholder="Password"
            className="text-white bg-primary px-4 py-2 rounded-xl h-12 w-full"
          />
        </div>
      </div>

      <div className="w-full">
        <a href="/">
          <h6 className="text-white text-opacity-50 text-xs hover:text-white hover:underline">
            Don’t have an account?
          </h6>
        </a>
      </div>

      <div className="w-full flex justify-center items-center gap-3 my-6">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>

      <div className="w-full flex justify-start gap-4 mt-8">
        <button
          type="button"
          className={`py-3 px-4 bg-themeBlue text-white text-3xl font-semibold shadow-md rounded-xl w-24`}
          onClick={prevStep}
        >
          <h3 className="font-light text-sm leading-4 tracking-wide">Back</h3>
        </button>
        <button
          type="button"
          className={`py-3 px-4 bg-themeBlue text-white text-3xl font-semibold shadow-md rounded-xl w-24`}
          onClick={nextStep}
        >
          <h3 className="font-light text-sm leading-4 tracking-wide">
            Continue
          </h3>
        </button>
      </div>
    </>
  );
}

export default PasswordStep;
