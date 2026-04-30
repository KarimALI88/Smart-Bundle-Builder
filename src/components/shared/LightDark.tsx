import { MoonFilled, SunFilled } from "@ant-design/icons";
import { Switch } from "antd";

const LightDark = () => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-2 py-1">
      <SunFilled className="text-[12px] text-slate-500" />
      <Switch
        size="small"
        defaultChecked
        className="[&_.ant-switch-handle]:!before:bg-white"
      />
      <MoonFilled className="text-[12px] text-slate-500" />
    </div>
  );
};

export default LightDark;
