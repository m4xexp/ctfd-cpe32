import React from "react";

type Props = {
  imgUrl?: string;
  title?: string;
  description?: string;
  urlPath?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
};

function FeatureCard(props: Props) {
  const { imgUrl, title, description, urlPath, width, height, borderRadius } =
    props;

  return (
    <>
      <div
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repat",
          backgroundBlendMode: "multiply",
          backgroundImage: `url(${imgUrl})`,
        }}
        className={`group relative flex h-96 ${height} ${width} 
                    w-64 items-center justify-center rounded-2xl ${borderRadius} shadow-md`}
      >
        <div
          style={{
            backdropFilter: "blur(3px)",
          }}
          className={`absolute bottom-0 h-44 w-full flex-col gap-2 rounded-2xl 
                     bg-[#0A0527] bg-opacity-0 p-7 text-white transition duration-300 
                      ease-in-out first-line:flex group-hover:bg-opacity-35`}
        >
          <a href={urlPath}>
            <h6 className="text-xl font-semibold">{title}</h6>
          </a>
          <h6 className="text-base font-light">{description}</h6>
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
