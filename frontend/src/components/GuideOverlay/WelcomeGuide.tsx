type Props = {};

function WelcomeGuide({}: Props) {
  return (
    <>
      <div className="fixed bg-primary bg-opacity-70 w-full h-full z-30">
        <div className="flex flex-col justify-center items-center h-full">
          <h6 className="text-white font-medium text-2xl">
            Welcome to the CPE32 Playground
          </h6>
          <h6 className="text-white font-medium text-2xl">
            let’s we show you what we can do for you.
          </h6>

          <div className="w-full flex justify-center gap-2 mt-4">
            <button className="py-3 px-4 w-20 bg-secondary text-white text-3xl font-semibold shadow-md rounded-xl">
              <h3 className="text-white font-light text-sm">Next</h3>
            </button>
            <button className="py-3 px-4 w-20 bg-secondary text-white text-3xl font-semibold shadow-md rounded-xl">
              <h3 className="text-white font-light text-sm">Skip</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeGuide;
