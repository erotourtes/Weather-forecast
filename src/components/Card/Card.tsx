import "./Card.css";
import defaultImg from "./image-not-found.jpg";

interface CardProps {
  title: string;
  body: string;
  img?: string;
}
const Card = ({ title, body, img }: CardProps) => {
  return (
    <div className="card-container">
      <img src={img || defaultImg} alt="Card" className="card-image" />
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <p className="card-body">{body}</p>
      </div>
    </div>
  );
};

export default Card;
