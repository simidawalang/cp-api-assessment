import { ChangeEvent, useState, Dispatch } from "react";
import { ImCross } from "react-icons/im";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BiListUl } from "react-icons/bi";
import { ImPlus } from "react-icons/im";
import { v4 as uuidv4 } from "uuid";

interface ICustomQuestion {
  key?: string;
  formData: any;
  setFormData: Dispatch<any>;
  setAddQuestion: Dispatch<any>;
  setQuestionList: Dispatch<any>;
  selectedQuestion?: any;
}

const CustomQuestion = ({
  key,
  formData,
  setFormData,
  setAddQuestion,
  setQuestionList,
  selectedQuestion,
}: ICustomQuestion) => {
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

  console.log(customChoices)

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
      {/* Question types, I made use of divs instead of a select component so the UI will be uniform across all browsers  */}
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

      {/* For multiple choice questions or dropdowns*/}

      {questionType === "Multiple choice" && (
        <div className="form-group">
          <label className="select-label">Choices</label>
          {customChoices.map(({ id, choice }: any) => (
            <div key={id} className="add-choice">
              <BiListUl size={24}/>
              <input
                className="custom-input"
                value={choice}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCustomChoices((prev: any) => [
                    ...prev.filter((t: any) => t.id !== id),
                    { id, choice: e.target.value },
                  ])
                }
              />
              <button
                className="add-choice-btn"
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
                <ImPlus size={10} />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="question-btns">
        <button
          className="delete-question-btn"
          onClick={() => {
            setQuestionList((prev: any) =>
              prev.filter((q: any) => q.id !== selectedQuestion?.id)
            );
            setAddQuestion(false);
          }}
        >
          <ImCross size={24} />
          Delete question
        </button>
        <button
          className="save-btn"
          onClick={() => {
            setQuestionList((prev: any) => [
              ...prev,
              {
                id: uuidv4(),
                type: questionType,
                question,
                choices: ["string"],
                maxChoice: 0,
                disqualify: false,
                other: false,
              },
            ]);
            setAddQuestion(false);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomQuestion;
