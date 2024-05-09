import style from "./Card.module.scss";

// Это первый вариант, как можно отрисовать поля у карточки

// import { TPropsCard } from "../../types/types";

// export const Card = ({title, category, price}: TPropsCard) => {
  
//   return (
//     <div className={style.card}>
//       <div className={style.card__wrapper}>        
//         <div>Название: {title}</div>
//         <div>Категория: {category}</div>
//         <div>Цена: {price} р.</div>
//       </div>
//     </div>
//   );
// };


// Это второй вариант, более масштабируемый, на случай, если полей у карточки будет больше, чем 3.

export const Card = (props: Record<string, any>) => {
  const { id, ...otherProps } = props;

  return (
    <div className={style.card}>
      <div className={style.card__wrapper}>        
        {Object.entries(otherProps).map(([key, value]) => (
          <div key={key} >
            {key}: {value}
          </div>
        ))}
      </div>
    </div>
  );
};
