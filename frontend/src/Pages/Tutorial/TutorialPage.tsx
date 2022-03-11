import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import FeatureCard from "components/Cards/FeatureCard";

type Props = {};

function TutorialPage({}: Props) {
  return (
    <>
      <div className="mt-10 flex min-h-screen flex-col items-center justify-start gap-4">
        <h1 className="text-4xl font-bold text-white">Tutorial</h1>

        <div className="flex w-full flex-col gap-3 px-10">
          <h4 className="text-2xl  font-medium tracking-wide text-white">
            My progress
          </h4>
          <div className="grid h-44 w-full grid-cols-5 grid-rows-1 overflow-hidden rounded-2xl bg-primary">
            <div className="col-span-1 w-64">
              <img
                src="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="coding for life"
                className=""
              />
            </div>
            <div className="col-span-3 flex flex-col items-start justify-start gap-5 py-8 px-2 text-white">
              <h2 className="text-2xl font-medium">
                My COURSES : Cybersecurity Fundamental
              </h2>
              <h6>Chapter 2 : Introduction Cybersecurity Fundamental</h6>
              <div className="flex w-full items-center gap-4">
                <h6>Progress :</h6>
                <div className="h-3 w-96 overflow-hidden rounded-full border border-[#37B8F0] bg-primary">
                  <div
                    style={{ width: "20%" }}
                    className="h-3 rounded-full bg-[#37B8F0]"
                  ></div>
                </div>
                <h6 className="text-[#0FB1D9]">20 %</h6>
              </div>
            </div>

            <div className="flex flex-col items-end justify-between p-4 text-white">
              <button
                type="button"
                className={`w-56 rounded-xl border border-white bg-[#344663] py-3 px-4 text-3xl font-semibold text-[#FEC751] shadow-md`}
              >
                <h3 className="text-sm font-light leading-4 tracking-wide">
                  Continue to your course
                </h3>
              </button>
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`inline-flex w-40 items-center justify-center rounded-xl bg-[#0062B9] py-3 px-4 text-3xl font-semibold text-white shadow-md`}
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                  <h3 className="text-sm font-light leading-4 tracking-wide">
                    Previous Course
                  </h3>
                </button>
                <button
                  type="button"
                  className={`inline-flex w-40 items-center justify-center rounded-xl bg-[#0062B9] py-3 px-4 text-3xl font-semibold text-white shadow-md`}
                >
                  <h3 className="text-sm font-light leading-4 tracking-wide">
                    Next Course
                  </h3>
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          <h4 className="text-2xl font-medium tracking-wide text-white">
            Contents
          </h4>
          <div className="flex gap-10">
            <FeatureCard
              urlPath="/tutorial"
              title="Tutorial"
              description="Click here to start tutorial. You can learn the basic of
            security from this feature."
              imgUrl="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            />
            <FeatureCard
              urlPath="/challenge"
              title="Challenge"
              description="Click here to start tutorial. You can learn the basic of
          security from this feature."
              imgUrl="https://images.unsplash.com/photo-1634224111343-9f501daf4184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            />
            <FeatureCard
              urlPath="/leaderboard"
              title="Leaderboard"
              description="Click here to start tutorial. You can learn the basic of
          security from this feature."
              imgUrl="https://images.unsplash.com/photo-1517602302552-471fe67acf66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            />
            <FeatureCard
              urlPath="/event-mode"
              title="Event Mode"
              description="Click here to start tutorial. You can learn the basic of
          security from this feature."
              imgUrl="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <FeatureCard
              urlPath="/badge"
              title="Badge"
              description="Click here to start tutorial. You can learn the basic of
          security from this feature."
              imgUrl=" https://images.unsplash.com/photo-1601283220664-300f46e9e85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div className="flex w-full justify-end">
            <div className="h-16 w-96 rounded-2xl bg-primary"></div>
          </div>
        </div>
        <div className="my-6 flex flex-col gap-5">
          <h4 className="text-2xl font-medium tracking-wide text-white">
            All contents
          </h4>
          <div className="flex gap-10">
            <FeatureCard
              urlPath="/tutorial"
              title="Tutorial"
              description="Click here to start tutorial. You can learn the basic of
            security from this feature."
              imgUrl="https://images.unsplash.com/photo-1517602302552-471fe67acf66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            />
            <FeatureCard
              urlPath="/challenge"
              title="Challenge"
              description="Click here to start tutorial. You can learn the basic of
          security from this feature."
              imgUrl="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <FeatureCard
              urlPath="/leaderboard"
              title="Leaderboard"
              description="Click here to start tutorial. You can learn the basic of
          security from this feature."
              imgUrl=" https://images.unsplash.com/photo-1601283220664-300f46e9e85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <FeatureCard
              urlPath="/event-mode"
              title="Event Mode"
              description="Click here to start tutorial. You can learn the basic of
          security from this feature."
              imgUrl=" https://images.unsplash.com/photo-1601283220664-300f46e9e85a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <FeatureCard
              urlPath="/badge"
              title="Badge"
              description="Click here to start tutorial. You can learn the basic of
          security from this feature."
              imgUrl="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
          </div>
          <div className="flex w-full justify-end">
            <div className="h-16 w-96 rounded-2xl bg-primary"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TutorialPage;
