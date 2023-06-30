import React from "react";

interface MainProps {
  children?: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="h-full antialiased p-4">
      {children}
    </div>
  );
};

export default Main;
