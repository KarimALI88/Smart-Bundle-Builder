import LightDark from "@/components/shared/LightDark";
import ProgressBar from "@/components/shared/ProgressBar";

const TobBar = () => {
  return (
    <div className="flex flex-wrap justify-between items-center p-2 mb-4 bg-white gap-4">
      <ProgressBar />
      <LightDark />
    </div>
  );
};

export default TobBar;
