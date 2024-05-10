import { Fragment, useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { getProducts } from "./api/products/products_api";
import { IProduct } from "./api/products/type";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getProducts();
        setProducts(result);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        setIsLoading(false)
        setIsError(true)
      }
    };
    
    setIsLoading(true)
    getData();
  }, []);
  return (
    <>
      <h1>Enjoy =)</h1>

      <h2>
        Задание №1: Сегодня 1 мая, срок 10 дней. От продакта поступила задача:
        вывести список товаров на странице. Что нужно вывести: название товара,
        категорию товара и цену товара. Какое кол-во товаров будет не известно.
        Бэкенд пока не готов. Но времени ждать нет.
      </h2>
      {isLoading ? <div>Loading...</div> : ""}
      {!isError ? (
        products.map((item, index) => (
          <Fragment key={index}>
            <Card data={item} />
          </Fragment>
        ))
      ) : (
        <div>Ошибка, попробуйте позже</div>
      )}
    </>
  );
}

export default App;
