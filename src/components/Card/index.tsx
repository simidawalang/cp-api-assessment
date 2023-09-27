interface ICard {
  title: string;
}

const Card = ({ title }: ICard) => {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
    </div>
  );
};

export default Card;
