import FeatureCard from "components/Cards/FeatureCard";

type Props = {};

function MainEvent({}: Props) {
  return (
    <>
      <div
        style={{ minHeight: "calc(100vh - 80px)" }}
        className="grid min-h-screen w-full grid-cols-4 gap-4"
      >
        <FeatureCard
          borderRadius="rounded-none"
          width="w-full"
          height="h-full"
          urlPath="/tutorial"
          title="Tutorial"
          description="Click here to start tutorial. You can learn the basic of
            security from this feature."
          imgUrl="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=421&q=80"
        />
        <FeatureCard
          borderRadius="rounded-none"
          width="w-full"
          height="h-full"
          urlPath="/challenge"
          title="Challenge"
          description="Click here to start tutorial. You can learn the basic of
          security from this feature."
          imgUrl="https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <FeatureCard
          borderRadius="rounded-none"
          width="w-full"
          height="h-full"
          urlPath="/leaderboard"
          title="Leaderboard"
          description="Click here to start tutorial. You can learn the basic of
          security from this feature."
          imgUrl="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <FeatureCard
          borderRadius="rounded-none"
          width="w-full"
          height="h-full"
          urlPath="/event-mode"
          title="Event Mode"
          description="Click here to start tutorial. You can learn the basic of
          security from this feature."
          imgUrl="https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </div>
    </>
  );
}

export default MainEvent;
