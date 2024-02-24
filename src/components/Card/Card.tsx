import classNames from "classnames";
import "./Card.css";
import defaultImg from "./image-not-found.jpg";

interface CardProps {
  title: string;
  body: string;
  img?: string;
  selected?: boolean;
  onCardClick: () => void;
}
const Card = ({
  title,
  body,
  img,
  onCardClick,
  selected = false,
}: CardProps) => {
  return (
    <div
      onClick={onCardClick}
      className={`card-container ${classNames({
        "selected-card": selected,
      })}`}
    >
      <img src={img || defaultImg} alt="Card" className="card-image" />
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <p className="card-body">{body}</p>
      </div>
    </div>
  );
};

export default Card;
