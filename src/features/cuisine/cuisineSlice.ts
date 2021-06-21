import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Cuisines, CuisineState } from './cuisineTypes';

const initialState: CuisineState = {
  selected: Cuisines.NONE,
};

export const cuisineSlice = createSlice({
  name: 'cuisine',
  initialState,
  reducers: {
    chooseCuisine: (state, action: PayloadAction<Cuisines>) => {
      state.selected = action.payload;
    },
  },
});

export const selectCuisine = (state: RootState) => state.cuisine.selected;
export const { chooseCuisine } = cuisineSlice.actions;
export default cuisineSlice.reducer;
