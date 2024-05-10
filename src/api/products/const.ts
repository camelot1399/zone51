import { KeyValueMappings } from "./type";

// Эндпоинт получения продуктов с бека
const BASE_URL = "http://localhost:5555/";
export const PRODUCTS_URL = BASE_URL + "src/api/products/mok_products.json";

// Front key names
// Ключи которые мы используем в проекте
export const FRONT__TITLE = "title";
export const FRONT__CATEGORY = "category";
export const FRONT__PRICE = "price";

// Back key names
// Ключи которые мы получаем с бека
export const BACK__TITLE = "product_title";
export const BACK__CATEGORY = "product_category";
export const BACK__PRICE = "product_price";

export const keyValueMappings: KeyValueMappings = {
    [FRONT__TITLE]: [BACK__TITLE],
    [FRONT__CATEGORY]: [BACK__CATEGORY],
    [FRONT__PRICE]: [BACK__PRICE]
}