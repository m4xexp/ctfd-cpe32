import { FC, PropsWithChildren } from "react";

//* Interfaces or Types
type ComponentWithChildProps = PropsWithChildren<{ child?: string }>;

const PublicLayout: FC<ComponentWithChildProps> = ({ children }) => {
  return (
    <>
      <div
        className="min-h-screen py-5 px-7"
        style={{ minHeight: "calc(100vh - (80px))" }}
      >
        {children}
      </div>
    </>
  );
};

export default PublicLayout;
