import { UserIcon } from "@heroicons/react/solid";

type Props = {
  prevStep: () => void;
  nextStep: () => void;
  formTitle?: string;
  gotoStep: (step: number) => void;
};

function StaySignedInStep(props: Props) {
  const { prevStep, nextStep, formTitle, gotoStep } = props;
  return (
    <>
      <h2 className="mb-2 text-4xl font-bold text-white">{formTitle}</h2>
      <div className="flex items-center justify-center gap-2">
        <UserIcon className="h-6 w-6 rounded-full border border-white text-white" />
        <h6 className="text-sm text-white">example32@somemail.com</h6>
      </div>

      <div className="w-full">
        <h6 className="text-center text-xs text-white">
          Stay signed in so you don’t have to sign in again next time.
        </h6>
      </div>

      <div className="w-full">
        <div className="form-check">
          <input
            className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none 
                    rounded-sm border border-gray-300 bg-white bg-contain bg-center 
                        bg-no-repeat align-top transition duration-200 checked:border-themeBlue checked:bg-themeBlue focus:outline-none"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexCheckDefault"
          >
            <h6 className="text-xs text-white">Don’t show this again</h6>
          </label>
        </div>
      </div>

      <div className="my-6 flex w-full items-center justify-center gap-3">
        <button
          className="h-2 w-2 rounded-full bg-gray-400"
          onClick={() => gotoStep(0)}
        ></button>
        <button
          className="h-2 w-2 rounded-full bg-gray-400"
          onClick={() => gotoStep(1)}
        ></button>
        <button
          className="h-2 w-2 rounded-full bg-white"
          onClick={() => gotoStep(2)}
        ></button>
      </div>

      <div className="mt-8 flex w-full justify-start gap-4">
        <button
          type="button"
          className={`w-24 rounded-xl bg-[#0062B9] py-3 px-4 text-3xl font-semibold text-white shadow-md`}
          onClick={prevStep}
        >
          <h3 className="text-sm font-light leading-4 tracking-wide">Back</h3>
        </button>
        <button
          type="button"
          className={`w-24 rounded-xl bg-[#0062B9] py-3 px-4 text-3xl font-semibold text-white shadow-md`}
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

export default StaySignedInStep;
