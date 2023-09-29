import { FaPlus } from "react-icons/fa";
import CustomQuestion from "../CustomQuestion";
import { Dispatch, useState } from "react";
import { LiaPenSolid } from "react-icons/lia";

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

  const toggleAddQuestion = () => {
    setAddQuestion((prev) => !prev);
  };

  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">

        {/* To List questions and their type */}
        {questionList.length !== 0 && (
          <div className="question-list">
            {questionList.map(({ id, type, question }: any) => (
              <div className="question-item" key={id}>
                <span className="question-type">{type}</span>
                <div className="question-text">
                  <p> {question}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {addQuestion ? (
          <>
            <CustomQuestion
              questionList={questionList}
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
