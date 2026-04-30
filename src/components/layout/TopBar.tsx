import LightDark from "../publicComponents/LightDark";
import LogoComp from "../publicComponents/LogoComp";
import ProgressBar from "../publicComponents/ProgressBar";

const TobBar = () => {
  return (
    <div className="flex justify-between items-center p-4 mb-4">
      <LogoComp />
      <ProgressBar />
      <LightDark />
    </div>
  );
};

export default TobBar;
