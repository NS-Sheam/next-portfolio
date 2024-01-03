import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Suspense } from "react";

const layout = ({ children }) => {
  return (
    <div className={` min-h-screen max-w-screen-xl mx-auto `}>
      <div className="bg-gradient-to-r from-bandPrimary via-bandSecondary to-bandTernary">
        <Header />
      </div>
      <Suspense
        fallback={
          <div className="h-screen mx-auto">
            <p className="loading loading-infinity loading-lg text-band-orange"></p>
          </div>
        }
      >
        {children}
        <Footer />
      </Suspense>
    </div>
  );
};

export default layout;
