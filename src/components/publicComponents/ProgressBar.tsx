import { Progress } from "antd";

type ProgressBarProps = {
  spent?: number;
  total?: number;
  percent?: number;
};

const ProgressBar = ({ spent = 480, total = 1000, percent = 48 }: ProgressBarProps) => {
  return (
    <div className="w-[60%] rounded-md px-2 py-1">
      <div className="flex items-center gap-3">
        <div className="min-w-[96px] leading-tight">
          <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Budget</p>
          <p className="text-[20px] font-semibold text-primary">
            ${spent} <span className="text-sm font-medium text-gray-400">/ ${total}</span>
          </p>
        </div>

        <div className="flex-1">
          <Progress
            percent={percent}
            showInfo={false}
            strokeLinecap="round"
            strokeColor="#1977FF"
            trailColor="#E6E8EE"
            size={[undefined, 10]}
          />
        </div>

        <p className="min-w-[78px] text-right text-sm font-semibold text-blue-600">{percent}% Used</p>
      </div>
    </div>
  );
};

export default ProgressBar;
