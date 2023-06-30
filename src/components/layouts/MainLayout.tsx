import React from "react";
import { AnalyticsProvider } from "@yext/pages/components"; 
import Header from "../Header";

// interface MainProps {
//   children?: React.ReactNode;
// }

const MainLayout = ({ templateData, root, children }) => {
  return (
    <AnalyticsProvider templateData={templateData}>
      <div className="h-full w-full min-h-screen antialiased">
        <Header url={root} />
        <div className="p-4">
          {children}
        </div>
      </div>
    </AnalyticsProvider>
  );
};

export default MainLayout;
