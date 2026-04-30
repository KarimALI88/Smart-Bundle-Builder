import { useTotal } from "@/context/TotalContext";
import { Progress } from "antd";

const ProgressBar = () => {
  const maxTotal = 1000;
  const { total } = useTotal();

  return (
    <div className="w-full md:w-[60%] rounded-md px-2 py-1">
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
        <div className="min-w-[96px] leading-tight">
          <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Budget</p>
          <p className="text-[20px] font-semibold text-primary">
            ${total} <span className="text-sm font-medium text-gray-400">/ ${maxTotal}</span>
          </p>
        </div>

        <div className="flex-1">
          <Progress
            percent={(total / maxTotal) * 100}
            showInfo={false}
            strokeLinecap="round"
            strokeColor="#1977FF"
            railColor="#E6E8EE"
            size={["100%", 10]}
          />
        </div>

        <p className="min-w-[78px] text-right text-sm font-semibold text-blue-600">{((total / maxTotal) * 100).toFixed(2)}% Used</p>
      </div>
    </div>
  );
};

export default ProgressBar;
