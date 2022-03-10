import { UserIcon } from "@heroicons/react/solid";

type Props = {
  prevStep: () => void;
  nextStep: () => void;
  formTitle?: string;
};

function StaySignedInStep(props: Props) {
  const { prevStep, nextStep, formTitle } = props;
  return (
    <>
      <h2 className="text-white font-bold text-4xl mb-2">{formTitle}</h2>
      <div className="flex justify-center items-center gap-2">
        <UserIcon className="w-6 h-6 text-white border-white border rounded-full" />
        <h6 className="text-white text-sm">example32@somemail.com</h6>
      </div>

      <div className="w-full">
        <h6 className="text-white text-xs text-center">
          Stay signed in so you don’t have to sign in again next time.
        </h6>
      </div>

      <div className="w-full">
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white 
                    checked:bg-themeBlue checked:border-themeBlue focus:outline-none transition duration-200 mt-1 
                        align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexCheckDefault"
          >
            <h6 className="text-white text-xs">Don’t show this again</h6>
          </label>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-3 my-6">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>

      <div className="w-full flex justify-start gap-4 mt-8">
        <button
          type="button"
          className={`py-3 px-4 bg-[#0062B9] text-white text-3xl font-semibold shadow-md rounded-xl w-24`}
          onClick={prevStep}
        >
          <h3 className="font-light text-sm leading-4 tracking-wide">Back</h3>
        </button>
        <button
          type="button"
          className={`py-3 px-4 bg-[#0062B9] text-white text-3xl font-semibold shadow-md rounded-xl w-24`}
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

export default StaySignedInStep;
