import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "@/types/index";
import { Filter } from "@/constants/constants";
import { mockCards } from "@/mocks/mocks";
import { RootState } from "@/store/store";

export interface CardsState {
  filter: Filter;
  cards: Card[];
}

const initialState: CardsState = {
  filter: Filter.SHOW_ALL,
  cards: mockCards,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setFilter: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.filter>
    ) => {
      state.filter = action.payload;
    },
    setCards: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.cards>
    ) => {
      debugger;
      state.cards = action.payload;
    },
  },
});

export const getCardsState = (state: { cards: CardsState }) => state.cards;

export const getCardsByFilter = (state: RootState, filter: Filter) => {
  if (filter === Filter.SHOW_ALL) {
    return state.cards.cards;
  }
  return state.cards.cards.filter((card) => card.type === filter);
};

export const { setFilter, setCards } = cardsSlice.actions;

export default cardsSlice.reducer;
