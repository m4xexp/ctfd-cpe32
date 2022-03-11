import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

type Props = {
  prevStep: () => void;
  nextStep: () => void;
  formTitle?: string;
  gotoStep: (step: number) => void;
};

function PasswordStep(props: Props) {
  const [toggleHidsPassword, setToggleHidePassword] = useState(true);
  const { prevStep, nextStep, formTitle, gotoStep } = props;
  return (
    <>
      <h2 className="mb-2 text-4xl font-bold text-white">{formTitle}</h2>
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
            id="password"
            type={toggleHidsPassword ? "password" : "text"}
            placeholder="Password"
            className="h-12 w-full rounded-xl bg-primary px-4 py-2 text-white"
          />
        </div>
      </div>

      <div className="w-full">
        <a href="/">
          <h6 className="text-xs text-white text-opacity-50 hover:text-white hover:underline">
            Don’t have an account?
          </h6>
        </a>
      </div>

      <div className="my-6 flex w-full items-center justify-center gap-3">
        <button
          className="h-2 w-2 rounded-full bg-gray-400"
          onClick={() => gotoStep(0)}
        ></button>
        <button
          className="h-2 w-2 rounded-full bg-white"
          onClick={() => gotoStep(1)}
        ></button>
        <button
          className="h-2 w-2 rounded-full bg-gray-400"
          onClick={() => gotoStep(2)}
        ></button>
      </div>

      <div className="mt-8 flex w-full justify-start gap-4">
        <button
          type="button"
          className={`w-24 rounded-xl bg-themeBlue py-3 px-4 text-3xl font-semibold text-white shadow-md`}
          onClick={prevStep}
        >
          <h3 className="text-sm font-light leading-4 tracking-wide">Back</h3>
        </button>
        <button
          type="button"
          className={`w-24 rounded-xl bg-themeBlue py-3 px-4 text-3xl font-semibold text-white shadow-md`}
          onClick={nextStep}
        >
          <h3 className="text-sm font-light leading-4 tracking-wide">
            Continue
          </h3>
        </button>
      </div>
    </>
  );
}

export default PasswordStep;
