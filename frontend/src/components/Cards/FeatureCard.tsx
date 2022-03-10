import React from "react";

type Props = {
  imgUrl?: string;
  title?: string;
  description?: string;
  urlPath?: string;
};

function FeatureCard(props: Props) {
  const { imgUrl, title, description, urlPath } = props;

  return (
    <>
      <div
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repat",
          backgroundBlendMode: "multiply",
          backgroundImage: `url(${imgUrl})`,
        }}
        className={`flex justify-center items-center rounded-2xl 
                    shadow-md w-64 h-96 relative group `}
      >
        <div
          style={{
            backdropFilter: "blur(3px)",
          }}
          className="bg-[#0A0527]  w-full h-44 absolute bottom-0 rounded-2xl bg-opacity-0
                     text-white p-7 group-hover:bg-opacity-35 first-line:flex flex-col gap-2 transition ease-in-out duration-300"
        >
          <a href={urlPath}>
            <h6 className="font-semibold text-xl">{title}</h6>
          </a>
          <h6 className="font-light text-base">{description}</h6>
        </div>
      </div>
    </>
  );
}

FeatureCard.defaultProps = {
  imgUrl:
    "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
};

export default FeatureCard;
