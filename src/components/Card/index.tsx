import { FaPlus } from "react-icons/fa";
import CustomQuestion from "../CustomQuestion";
import { Dispatch, useState } from "react";
import { LiaPenSolid } from "react-icons/lia";
import Checkbox from "../Checkbox";
import ToggleSwitch from "../ToggleSwitch";

interface ICard {
  title: string;
  _key?: string;
  formData: any;
  setFormData: Dispatch<any>;
}

const Card = ({ title, _key, formData, setFormData }: ICard) => {
  const [addQuestion, setAddQuestion] = useState(false);
  const [questionList, setQuestionList] = useState<any>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<any>({});
  const [editQuestion, setEditQuestion] = useState(false);

  const toggleAddQuestion = () => {
    setAddQuestion((prev) => !prev);
  };

  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="default-question">
          <>
            {_key === "personalInformation" && (
              <>
                <div className="default-question__item">
                  <span className="label">First Name</span>
                </div>
                <div className="default-question__item">
                  <span className="label">Email</span>
                </div>
                <div className="default-question__item">
                  <span className="label">Phone Number</span>
                </div>
                <div className="default-question__item">
                  <span className="label">Nationality</span>
                </div>
                <div className="default-question__item">
                  <span className="label">Current Residence</span>
                  <div>
                    <Checkbox label="Internal" />
                    <ToggleSwitch />
                  </div>
                </div>
                <div className="default-question__item">
                  <span className="label">ID Number</span>
                </div>
                <div className="default-question__item">
                  <span className="label">Date of Birth</span>
                </div>
                <div className="default-question__item">
                  <span className="label">Gender</span>
                </div>
              </>
            )}

            {_key === "profile" && (
              <>
                <div className="default-question__item">
                  <span className="label">Education</span>
                </div>
                <div className="default-question__item">
                  <span className="label">Experience</span>
                </div>
                <div className="default-question__item">
                  <span className="label">Resume</span>
                </div>
              </>
            )}
          </>
        </div>

        {/* To List questions and their type */}
        {questionList.length !== 0 && (
          <div className="question-list">
            {questionList.map((q: any) => (
              <div className="question-item" key={q.id}>
                <span className="question-type">{q.type}</span>
                <div className="question-text">
                  <p> {q.question}</p>{" "}
                  <LiaPenSolid
                    className="edit-btn"
                    size={18}
                    onClick={() => {
                      setSelectedQuestion(q);
                      setEditQuestion(true);
                    }}
                  />
                </div>

                {editQuestion && (
                  <CustomQuestion
                    selectedQuestion={selectedQuestion}
                    setQuestionList={setQuestionList}
                    formData={formData}
                    setFormData={setFormData}
                    setAddQuestion={setEditQuestion}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {addQuestion ? (
          <>
            <CustomQuestion
              setQuestionList={setQuestionList}
              formData={formData}
              setFormData={setFormData}
              setAddQuestion={setAddQuestion}
            />
          </>
        ) : (
          <button className="add-question-btn" onClick={toggleAddQuestion}>
            <FaPlus size={24} />
            Add a question
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
