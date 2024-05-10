import { FRONT__CATEGORY, FRONT__PRICE, FRONT__TITLE } from "../../api/products/const";
import { IProduct } from "../../api/products/type";
import style from "./Card.module.scss";

interface ICardProps {
  data: IProduct
}

export const Card = ({data}: ICardProps) => {
  
  return (
    <div className={style.card}>
      <div className={style.card__wrapper}>
        <div>Название: {data[FRONT__TITLE]}</div>
        <div>Категория: {data[FRONT__CATEGORY]}</div>
        <div>Цена: {data[FRONT__PRICE]} р.</div>
      </div>
    </div>
  );
};
