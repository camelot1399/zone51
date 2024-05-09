export interface ICard {
  title: string;
  category: string;
  price: number;
  id: number;
  [key: string]: unknown;
}

export type TPropsCard = {
  title: string;
  category: string;
  price: number;
  id: number;
  [key: string]: unknown;
};

