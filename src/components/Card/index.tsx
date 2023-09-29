import { FaPlus } from "react-icons/fa";
import CustomQuestion from "../CustomQuestion";
import { Dispatch, useState } from "react";

interface ICard {
  title: string;
  _key?: string;
  formData: any;
  setFormData: Dispatch<any>;
}

const Card = ({ title, _key, formData, setFormData }: ICard) => {
  const [addQuestion, setAddQuestion] = useState(false);

  const toggleAddQuestion = () => {
    setAddQuestion((prev) => !prev);
  };

  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        {addQuestion ? (
          <CustomQuestion formData={formData} setFormData={setFormData} setAddQuestion={setAddQuestion}/>
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
