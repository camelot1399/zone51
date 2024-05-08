import style from "./Card.module.scss";

export const Card = () => {
  {
    /* TODO написать коомпонент вывода товара - структуру дива не меняем, только название, категорию и цену  */
  }
  return (
    <div className={style.card}>
      <div className={style.card__wrapper}>
        <div>Название: клавиатура</div>
        <div>Категория: техника</div>
        <div>Цена: 1000 р.</div>
      </div>
    </div>
  );
};
