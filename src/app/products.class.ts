import { Categories } from './categories.enum';

export class Product {
  name: string;
  description: string;
  price: number;
  category: Categories;
  isAvailable: boolean;
}
