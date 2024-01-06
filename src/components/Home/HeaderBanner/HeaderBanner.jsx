import Header from "@/components/Header/Header";
import Banner from "@/components/Home/Banner/Banner";
import "./HeaderBanner.css";

const HeaderBanner = () => {
  return (
    <div id="header-banner" className="bg-bandTernary bg-fixed">
      <Header />
      <Banner />
    </div>
  );
};

export default HeaderBanner;
