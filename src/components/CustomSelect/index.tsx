import { MouseEventHandler, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const CustomSelect = ({
  label,
  placeholder,
  options,
  onChange,
}: {
  label: string;
  placeholder: string;
  options: any[];
  onChange: MouseEventHandler;
}) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      <span className="select-label">{label}</span>
      <div className="custom-select">
        <div
          className="custom-select__content"
          onClick={() => setShowOptions(true)}
        >
          <span className="placeholder">{placeholder}</span>{" "}
          <AiOutlineCaretDown size={15} />{" "}
        </div>
        <div className="custom-select__options">
          {showOptions &&
            options.map(({ id, name }) => (
              <div className="select-option" key={id} onClick={onChange}>
                {name}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CustomSelect;