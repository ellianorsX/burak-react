import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectProductPage = (state: AppRootState) => state.productPage;

export const retrieveRestaurant = createSelector(
  selectProductPage,
  (ProductPage) => ProductPage.restaurant,
);

export const retrieveChosenProduct = createSelector(
  selectProductPage,
  (ProductPage) => ProductPage.chosenProduct,
);

export const retrieveProducts = createSelector(
  selectProductPage,
  (ProductPage) => ProductPage.products,
);
