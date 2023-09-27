import { ChangeEvent, useState } from "react";
import { ImCross } from "react-icons/im";
import { AiOutlineCaretDown } from "react-icons/ai";

const CustomQuestion = () => {
  const selectOptions = [
    { id: 1, type: "Paragraph" },
    { id: 2, type: "Short answer" },
    { id: 3, type: "Yes/No" },
  ];

  const [question, setQuestion] = useState("");
  const [questionType, setQuestionType] = useState(selectOptions[0].type);

  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  return (
    <div className="custom-question">
      <div className="custom-select form-label">
        <span className="select-label">Type</span>
        <div className="custom-input">
          {questionType} <AiOutlineCaretDown size={15} />
        </div>
        <div className="custom-select__options">
          {selectOptions.map(({ id, type }) => (
            <div key={id} onClick={() => setQuestionType(type)}>
              {type}
            </div>
          ))}
        </div>
      </div>

      <div className="form-label">
        <label className="select-label">Question</label>
        <input
          className="custom-input"
          value={question}
          onChange={handleQuestionChange}
        />
      </div>
      <div>
        <button className="delete-question-btn">
          <ImCross size={24} />
          Delete question
        </button>
      </div>
    </div>
  );
};

export default CustomQuestion;
