import { useState } from "react";

const ToggleSwitch = ({ isOn = false }: { isOn?: boolean }) => {
  const [switchOn, setSwitchOn] = useState(isOn);
  return (
    <div
      className="toggle-switch__container"
      onClick={() => setSwitchOn((prev) => !prev)}
    >
      <div className={`toggle-switch ${switchOn ? "on" : ""}`}>
        <div className={`toggle-indicator ${switchOn ? "on" : ""}`}></div>
      </div>
      <span>{switchOn ? "Show" : "Hide"}</span>
    </div>
  );
};

export default ToggleSwitch;
