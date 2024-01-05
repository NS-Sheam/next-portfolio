"use client";
import { CirclesWithBar } from "react-loader-spinner";

const GlovalLoader = () => {
  return (
    <div className="bg-white h-screen m-auto py-52 flex item-center justify-center ">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor="#001d3d"
        innerCircleColor="#000814"
        barColor="#003566"
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default GlovalLoader;
