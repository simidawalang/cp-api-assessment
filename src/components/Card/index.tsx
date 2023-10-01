import { FaPlus } from "react-icons/fa";
import CustomQuestion from "../CustomQuestion";
import { Dispatch, useRef, useState } from "react";
import { LiaPenSolid } from "react-icons/lia";
import { FiUpload } from "react-icons/fi";
import Checkbox from "../Checkbox";
import ToggleSwitch from "../ToggleSwitch";

interface ICard {
  title: string;
  _key?: string;
  formData: any;
  setFormData: Dispatch<any>;
  setCoverImage?: any;
}

const Card = ({ title, _key, formData, setFormData, setCoverImage }: ICard) => {
  const [addQuestion, setAddQuestion] = useState(false);
  const [questionList, setQuestionList] = useState<any>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<any>({});
  const [editQuestion, setEditQuestion] = useState(false);

  const handleImageChange = (e: any) => {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };

  const inputRef = useRef<any>();

  const toggleAddQuestion = () => {
    setAddQuestion((prev) => !prev);
  };

  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="default-question">
          <input
            type="file"
            hidden
            ref={inputRef}
            accept=".png,.jpg,.jpeg"
            onChange={handleImageChange}
          />
          <>
            {_key === "coverImage" && (
              <div
                className="upload-container"
                onClick={() => inputRef.current.click()}
              >
                <span className="upload-icon">
                  <FiUpload size={33} />
                </span>
                <span>Upload cover image</span>
                <span className="gray-text">16:9 ratio is recommended. Max image size 1mb</span>
              </div>
            )}
            {_key === "personalInformation" && (
              <>
                <div className="default-question__item">
                  <span className="label">First Name</span>
                </div>
                <div className="default-question__item">
                  <span className="label">Last Name</span>
                </div>
                <div className="default-question__item">
                  <span className="label">Email</span>
                </div>
                <div className="default-question__item">
                  <span className="label">Phone Number</span>
                  <div className="toggle-options">
                    <Checkbox label="Internal" />
                    <ToggleSwitch />
                  </div>
                </div>
                <div className="default-question__item">
                  <span className="label">Nationality</span>
                  <div className="toggle-options">
                    <Checkbox label="Internal" />
                    <ToggleSwitch />
                  </div>
                </div>
                <div className="default-question__item">
                  <span className="label">Current Residence</span>
                  <div className="toggle-options">
                    <Checkbox label="Internal" />
                    <ToggleSwitch />
                  </div>
                </div>
                <div className="default-question__item">
                  <span className="label">ID Number</span>
                  <div className="toggle-options">
                    <Checkbox label="Internal" />
                    <ToggleSwitch />
                  </div>
                </div>
                <div className="default-question__item">
                  <span className="label">Date of Birth</span>
                  <div className="toggle-options">
                    <Checkbox label="Internal" />
                    <ToggleSwitch />
                  </div>
                </div>
                <div className="default-question__item">
                  <span className="label">Gender</span>
                  <div className="toggle-options">
                    <Checkbox label="Internal" />
                    <ToggleSwitch />
                  </div>
                </div>
              </>
            )}

            {_key === "profile" && (
              <>
                <div className="default-question__item">
                  <span className="label">Education</span>
                  <div className="toggle-options">
                    <Checkbox label="Mandatory" />
                    <ToggleSwitch />
                  </div>
                </div>
                <div className="default-question__item">
                  <span className="label">Experience</span>
                  <div className="toggle-options">
                    <Checkbox label="Mandatory" />
                    <ToggleSwitch />
                  </div>
                </div>
                <div className="default-question__item">
                  <span className="label">Resume</span>
                  <div className="toggle-options">
                    <Checkbox label="Mandatory" />
                    <ToggleSwitch />
                  </div>
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
        {_key !== "coverImage" && (
          <>
            {" "}
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
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
