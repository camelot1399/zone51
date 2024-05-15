import { baseUrl } from "./constants";

export default async function getProducts() {
  try {
    const res = await fetch(`${baseUrl}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}`)
    }
    
    const data = await res.json();
    return data;

  } catch (err) {
    console.log(err);
  }
}