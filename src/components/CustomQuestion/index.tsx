import { ChangeEvent, useState, Dispatch } from "react";
import { ImCross } from "react-icons/im";
import { AiOutlineCaretDown } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

interface ICustomQuestion {
  key?: string;
  formData: any;
  setFormData: Dispatch<any>;
  setAddQuestion: Dispatch<any>;
}

const CustomQuestion = ({ key, formData, setFormData }: ICustomQuestion) => {
  const selectOptions = [
    { id: 1, name: "Paragraph" },
    { id: 2, name: "Short answer" },
    { id: 3, name: "Yes/No" },
    { id: 4, name: "Dropdown" },
    { id: 5, name: "Multiple choice" },
    { id: 6, name: "Date" },
    { id: 7, name: "Number" },
    { id: 8, name: "File Upload" },
    { id: 9, name: "Video question" },
  ];

  const [question, setQuestion] = useState("");
  const [questionType, setQuestionType] = useState(selectOptions[0].name);
  const [showOptions, setShowOptions] = useState(false);
  const [customChoices, setCustomChoices] = useState<any>([
    {
      id: uuidv4(),
      choice: "",
    },
  ]);

  const [choices, setChoices] = useState<any>([customChoices[0].choice]);

  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const selectQuestionType = (type: string) => {
    setQuestionType(type);
    setShowOptions(false);
  };

  return (
    <div className="custom-question">
      <div className="form-group">
        <span className="select-label">Type</span>
        <div className="custom-select">
          <div
            className="custom-select__content"
            onClick={() => setShowOptions((prev) => !prev)}
          >
            <span className="placeholder">{questionType}</span>{" "}
            <AiOutlineCaretDown size={15} />{" "}
          </div>
          <div className="custom-select__options">
            {showOptions &&
              selectOptions.map(({ id, name }) => (
                <div
                  className={`select-option ${
                    questionType === name && "current-option"
                  }`}
                  key={id}
                  onClick={() => selectQuestionType(name)}
                >
                  {name}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="select-label">Question</label>
        <input
          className="custom-input"
          value={question}
          onChange={handleQuestionChange}
        />
      </div>
      {questionType === "Multiple choice" && (
        <div className="form-group">
          <label className="select-label">Choices</label>
          {customChoices.map(({ id, choice }: any) => (
            <input
              key={id}
              className="custom-input"
              value={choice}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCustomChoices((prev: any) => [
                  ...prev.filter((t: any) => t.id !== id),
                  { id, choice: e.target.value },
                ])
              }
            />
          ))}

          <button
            onClick={() =>
              setCustomChoices((prev: any) => [
                ...prev,
                {
                  id: uuidv4(),
                  choice: "",
                },
              ])
            }
          >
            +
          </button>
        </div>
      )}
      <div className="question-btns">
        <button className="delete-question-btn">
          <ImCross size={24} />
          Delete question
        </button>
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
};

export default CustomQuestion;
