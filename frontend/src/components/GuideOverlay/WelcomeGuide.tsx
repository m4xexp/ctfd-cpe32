type Props = {};

function WelcomeGuide({}: Props) {
  return (
    <>
      <div className="fixed z-30 h-full w-full bg-primary bg-opacity-70">
        <div className="flex h-full flex-col items-center justify-center">
          <h6 className="text-2xl font-medium text-white">
            Welcome to the CPE32 Playground
          </h6>
          <h6 className="text-2xl font-medium text-white">
            let’s we show you what we can do for you.
          </h6>

          <div className="mt-4 flex w-full justify-center gap-2">
            <button className="w-20 rounded-xl bg-secondary py-3 px-4 text-3xl font-semibold text-white shadow-md">
              <h3 className="text-sm font-light text-white">Next</h3>
            </button>
            <button className="w-20 rounded-xl bg-secondary py-3 px-4 text-3xl font-semibold text-white shadow-md">
              <h3 className="text-sm font-light text-white">Skip</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeGuide;
