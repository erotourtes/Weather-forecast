import { TripT } from "../../types/trip";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

interface CardsProps extends React.PropsWithChildren {
  cards: TripT[];
  onCardClick?: (id: string) => void;
  selectedCard: string;
}

const Cards = ({ cards, onCardClick = () => {}, selectedCard }: CardsProps) => {
  return (
    <div className={`${styles.container} cards-row-gap`}>
      {cards.map((card) => (
        <Card
          selected={selectedCard === card.id}
          onCardClick={() =>
            onCardClick(selectedCard === card.id ? "" : card.id)
          }
          key={card.id}
          title={card.city}
          body={`${card.startDate} - ${card.endDate}`}
          img={card.img}
        />
      ))}
    </div>
  );
};

export default Cards;
