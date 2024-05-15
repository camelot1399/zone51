import { useState, useEffect } from "react";
import { Card } from "../Card/index";
import { ICard } from "../../types/types";
// import data from "../../mocks/data";
import styles from "./cardList.module.scss";
import getProducts from "../../utils/fetchProducts";

function CardList() {
  // const cards: ICard[] = data;
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    getProducts()
    .then((data) => {
      setCards(data);
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.cardListWrapper}>
      {cards?.map((card) => <Card key={card.id} {...card} />)}
    </div>    
  )  
}

export default CardList;