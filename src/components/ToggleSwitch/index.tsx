import { useState } from "react";

const ToggleSwitch = () => {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="toggle-switch">
      <div className="toggle-indicator"></div>
    </div>
  );
};

export default ToggleSwitch;
