import axios from "axios";
import { PRODUCTS_URL } from "./const";
import { IBackendProduct, IProduct } from "./type";
import { fromBackToFront } from "./helpers";

/**
 * Получает список продуктов с бэкенда.
 * @returns Промис, который разрешается массивом объектов типа IProduct.
 */
export const getProducts = async (): Promise<IProduct[]> => {
  try {
    let result = await axios.get<IBackendProduct[]>(PRODUCTS_URL);
    const mappedResult = fromBackToFront(result.data)    
    return mappedResult;
  } catch (error) {
    console.log(error);
    return []
  }
};
