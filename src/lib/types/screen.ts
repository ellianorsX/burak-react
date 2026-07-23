//**REACT APP STATE */

import { Member } from "./member";
import { Product } from "./product";

export interface AppRootState {
  homePage: HomePageState;
  productPage: ProductPageState;
}

/** HOME PAGE STATE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCT PAGE STATE **/
export interface ProductPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];

/**ORDER PAGE STATE **/
