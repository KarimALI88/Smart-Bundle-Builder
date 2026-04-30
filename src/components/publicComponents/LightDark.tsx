import { MoonFilled, SunFilled } from "@ant-design/icons";
import { Switch } from "antd";

const LightDark = () => {
  return (
    <div className="inline-flex items-center rounded-full bg-gray-100 p-1">
      <Switch
        size="default"
        defaultChecked
        checkedChildren={<MoonFilled className="text-[20px]" />}
        unCheckedChildren={<SunFilled className="text-[20px]" />}
      />
    </div>
  );
};

export default LightDark;
