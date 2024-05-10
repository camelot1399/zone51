import { keyValueMappings } from "./const"
import { IBackendProduct, IProduct } from "./type"

/**
 * Преобразует массив объектов из формата "backend" в формат "frontend".
 * На выходу мы получаем объекты, только с теми данными, которые нам нужны, отбрасывая всё лишнее
 * В случае, если название ключа изменилось на беке, мы записываем дефолтное значение "" и у нас нет ошибки
 * @param data Массив объектов в формате "backend".
 * @returns Массив объектов в формате "frontend".
 */
export const fromBackToFront = (data: IBackendProduct[]): IProduct[] => {
    if (!Array.isArray(data)) {
        console.log("Ошибка: данные с бэкенда не являются массивом.");
        return [];
    }

    return data.map(item => {
        const mappedItem: any = {};
        for (const frontKey in keyValueMappings) {
            if (keyValueMappings.hasOwnProperty(frontKey)) {
                const backKeys = keyValueMappings[frontKey];
                const value = backKeys.reduce((acc: string | number, backKey: string) => {
                    return acc || item[backKey] || "";
                }, "");
                mappedItem[frontKey] = value;
            }
        }
        return mappedItem as IProduct;
    });
}