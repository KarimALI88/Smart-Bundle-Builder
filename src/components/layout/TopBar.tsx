import LightDark from "@/components/publicComponents/LightDark";
import ProgressBar from "@/components/publicComponents/ProgressBar";

const TobBar = () => {
  return (
    <div className="flex justify-between items-center p-4 mb-4">
      <ProgressBar />
      <LightDark />
    </div>
  );
};

export default TobBar;
