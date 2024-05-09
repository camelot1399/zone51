import { Card } from "../Card/index";
import { ICard } from "../../types/types";
import data from "../../mocks/data";

function CardList() {
  const cards: ICard[] = data;

  return (
    <div>
      {cards?.map((card) => <Card key={card.id} {...card} />)}
    </div>    
  )  
}

export default CardList;