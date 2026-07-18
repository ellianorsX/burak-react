import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrievePopularDishes = createSelector(
  selectHomePage,
  (HomePage: { popularDishes: any }) => HomePage.popularDishes,
);

export const retrieveNewDishes = createSelector(
  selectHomePage,
  (HomePage: { newDishes: any }) => HomePage.newDishes,
);

export const retrieveTopUsers = createSelector(
  selectHomePage,
  (HomePage: { topUsers: any }) => HomePage.topUsers,
);
