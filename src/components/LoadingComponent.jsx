"use client";
import { Blocks } from "react-loader-spinner";
import CircularText from "./CurcularText/CircularText";

export const SquareLoadingComponent = () => {
  return (
    <div className="min-h-[calc(100vh-20vh)] flex items-center justify-center bg-bandTernary">
      <Blocks
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};

export const CircularTextLoadingComponent = ({ loadingObj }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bandTernary">
      <CircularText
        text={`Please wait - ${loadingObj}  is  loading...`}
        degree={10.5}
        circleSize="100px"
        origin="50px"
        textClass="text-xs font-bold text-bandYellow uppercase "
        animationSpeed="3s"
      />
    </div>
  )
}

