import FeatureCard from "components/Cards/FeatureCard";
import React from "react";

type Props = {};

function WelcomeSection({}: Props) {
  return (
    <>
      <div className="flex flex-col justify-start items-center h-screen gap-4">
        <div className="mt-20 flex gap-8 relative w-full justify-center">
          <div className="absolute left-0 top-1/2 border-b-2 border-white w-[37.75vw]"></div>
          <h1 className="text-white text-6xl font-bold">Features</h1>
          <div className="absolute right-0 top-1/2 border-b-2 border-white w-[37.75vw]"></div>
        </div>
        <h6 className="text-white text-center font-light mt-4">
          From easy to the most difficult, our virtual hacking labs cover all
          skill levels. New content is added every week, covering the latest
          exploits and vulnerabilities.
        </h6>

        <div className="flex gap-10 mt-12">
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
            imgUrl="https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80"
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
            imgUrl="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <FeatureCard
            urlPath="/badge"
            title="Badge"
            description="Click here to start tutorial. You can learn the basic of
          security from this feature."
            imgUrl="https://images.unsplash.com/photo-1517602302552-471fe67acf66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          />
        </div>
      </div>
    </>
  );
}

export default WelcomeSection;
