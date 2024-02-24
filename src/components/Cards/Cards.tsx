import { TripT } from "../../types/trip";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

interface CardsProps extends React.PropsWithChildren {
  cards: TripT[];
}

const Cards = ({ cards }: CardsProps) => {
  return (
    <div className={`${styles.container} cards-row-gap`}>
      {cards.map((card) => (
        <Card
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
