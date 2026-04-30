import LightDark from "@/components/publicComponents/LightDark";
import ProgressBar from "@/components/publicComponents/ProgressBar";

const TobBar = () => {
  return (
    <div className="flex justify-between items-center p-2 mb-4 bg-white">
      <ProgressBar />
      <LightDark />
    </div>
  );
};

export default TobBar;
