import { DotLeft, DotRight } from "components/Dot";

type Props = {};

function WelcomeSection({}: Props) {
  return (
    <div
      style={{ minHeight: "calc(100vh - (80px))" }}
      className="flex flex-col justify-center items-center min-h-screen gap-4"
    >
      <div className="relative p-8">
        <DotLeft />
        <h1 className="text-white text-6xl font-bold uppercase">
          We are what we learn
        </h1>
        <h1 className="text-white text-6xl font-bold uppercase text-center">
          cpe 32
        </h1>
        <DotRight />
      </div>

      <div className="w-1/2">
        <h6 className="text-white text-center font-light">
          We will make the Capture The Flag website that suitable for beginners
          with more challenge, tutorial and hint. In addition, our website is
          suitable for professionals as well.
        </h6>
      </div>

      <div className="mt-8">
        <button className="py-3 px-4 bg-themeBlue text-white text-3xl font-semibold shadow-md rounded-xl">
          <h3
            className=""
            style={{
              textShadow: "rgba(255, 99, 71, 0)",
            }}
          >
            Join Now
          </h3>
        </button>
      </div>
    </div>
  );
}

export default WelcomeSection;
