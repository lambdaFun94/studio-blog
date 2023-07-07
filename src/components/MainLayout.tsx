import { AnalyticsProvider } from "@yext/pages/components";
import Header from "./Header";
import { HexColor } from "@yext/studio";

interface MainLayoutProps {
  children: React.ReactNode;
  backgroundColor?: HexColor;
  // templateData: any;
}

export const initialProps = {
  backgroundColor: "#FFFFFF",
};

const MainLayout = ({ children, backgroundColor }: MainLayoutProps) => {
  return (
    // <AnalyticsProvider templateData={templateData}>
    <div
      className="h-full min-h-screen w-full antialiased"
      style={{ backgroundColor }}
    >
      {children}
    </div>
    // </AnalyticsProvider>
  );
};

export default MainLayout;
