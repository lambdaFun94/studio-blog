import { AnalyticsProvider } from "@yext/pages/components";
import Header from "./Header";

interface MainLayoutProps {
  children: React.ReactNode;
  // templateData: any;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    // <AnalyticsProvider templateData={templateData}>
    <div className="h-full min-h-screen w-full antialiased">
      <Header />
      <div className="p-4">{children}</div>
    </div>
    // </AnalyticsProvider>
  );
};

export default MainLayout;
