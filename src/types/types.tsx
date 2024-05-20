export interface ICard {
  name: string;
  category: string;
  old_price: number;
  current_price: number;
  id: number;
  [key: string]: unknown;
}

export type TPropsCard = {
  name: string;
  category: string;
  old_price: number;
  current_price: number;
  id: number;
  [key: string]: unknown;
};

