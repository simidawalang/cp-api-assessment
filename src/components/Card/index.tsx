import { FaPlus } from "react-icons/fa";
import CustomQuestion from "../CustomQuestion";

interface ICard {
  title: string;
}

const Card = ({ title }: ICard) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <CustomQuestion />
        <button className="add-question-btn">
          <FaPlus size={24} />
          Add a question
        </button>
      </div>
    </div>
  );
};

export default Card;
