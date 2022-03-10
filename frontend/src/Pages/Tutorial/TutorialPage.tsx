import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import FeatureCard from "components/Cards/FeatureCard";
import React from "react";

type Props = {};

function TutorialPage({}: Props) {
  return (
    <>
      <div className="mt-10 flex flex-col justify-start items-center min-h-screen gap-4">
        <h1 className="text-white text-4xl font-bold">Tutorial</h1>

        <div className="flex flex-col gap-3 w-full px-10">
          <h4 className="text-white  text-2xl font-medium tracking-wide">
            My progress
          </h4>
          <div className="grid grid-cols-5 grid-rows-1 bg-primary rounded-2xl w-full h-44 overflow-hidden">
            <div className="w-64 col-span-1">
              <img
                src="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="coding for life"
                className=""
              />
            </div>
            <div className="col-span-3 flex flex-col gap-5 items-start justify-start text-white py-8 px-2">
              <h2 className="font-medium text-2xl">
                My COURSES : Cybersecurity Fundamental
              </h2>
              <h6>Chapter 2 : Introduction Cybersecurity Fundamental</h6>
              <div className="flex items-center w-full gap-4">
                <h6>Progress :</h6>
                <div className="w-96 h-3 bg-primary border border-[#37B8F0] rounded-full overflow-hidden">
                  <div
                    style={{ width: "20%" }}
                    className="h-3 rounded-full bg-[#37B8F0]"
                  ></div>
                </div>
                <h6 className="text-[#0FB1D9]">20 %</h6>
              </div>
            </div>

            <div className="text-white flex flex-col justify-between items-end p-4">
              <button
                type="button"
                className={`py-3 px-4 bg-[#344663] border border-white text-[#FEC751] text-3xl font-semibold shadow-md rounded-xl w-56`}
              >
                <h3 className="font-light text-sm leading-4 tracking-wide">
                  Continue to your course
                </h3>
              </button>
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`py-3 px-4 bg-[#0062B9] text-white text-3xl font-semibold shadow-md rounded-xl inline-flex items-center justify-center w-40`}
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                  <h3 className="font-light text-sm leading-4 tracking-wide">
                    Previous Course
                  </h3>
                </button>
                <button
                  type="button"
                  className={`py-3 px-4 bg-[#0062B9] text-white text-3xl font-semibold shadow-md rounded-xl inline-flex items-center justify-center w-40`}
                >
                  <h3 className="font-light text-sm leading-4 tracking-wide">
                    Next Course
                  </h3>
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-12">
          <h4 className="text-white text-2xl font-medium tracking-wide">
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
          <div className="w-full flex justify-end">
            <div className="bg-primary rounded-2xl w-96 h-16"></div>
          </div>
        </div>
        <div className="flex flex-col gap-5 my-6">
          <h4 className="text-white text-2xl font-medium tracking-wide">
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
          <div className="w-full flex justify-end">
            <div className="bg-primary rounded-2xl w-96 h-16"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TutorialPage;
