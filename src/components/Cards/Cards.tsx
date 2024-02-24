import Card from "../Card/Card";
import styles from "./Cards.module.css";

interface CardsProps extends React.PropsWithChildren {
  cards: {
    title: string;
    body: string;
    img?: string;
  }[];
}

const Cards = ({ cards }: CardsProps) => {
  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} body={card.body} img={card.img} />
      ))}
    </div>
  );
};

export default Cards;
