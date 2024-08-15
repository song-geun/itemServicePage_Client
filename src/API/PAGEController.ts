import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PAGEController {
    sheetnum : number,
}

const initialState: PAGEController = {
    sheetnum : 0,
};
export const PAGEController = createSlice({
    name: "PAGEController",
    initialState,
    reducers: {
      setSheet: (state, action: PayloadAction<any>) => {
        state.sheetnum = action.payload;
      },
    },
}
);
export const {
    setSheet
} = PAGEController.actions;

export default PAGEController.reducer;