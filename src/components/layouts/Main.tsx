import React from "react";

interface MainProps {
  children?: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="flex h-full antialiased flex-col items-center">
      {children}
    </div>
  );
};

export default Main;
