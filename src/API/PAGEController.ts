import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PAGEController {
    sheetnum : number,
    sheet2input : boolean,
}

const initialState: PAGEController = {
    sheetnum : 0,
    sheet2input : false,
};
export const PAGEController = createSlice({
    name: "PAGEController",
    initialState,
    reducers: {
      setSheet: (state, action: PayloadAction<any>) => {
        state.sheetnum = action.payload;
      },
      setSheet2input: (state, action: PayloadAction<boolean>) => {
        state.sheet2input = !action.payload;
      },
    },
}
);
export const {
    setSheet,
    setSheet2input,
} = PAGEController.actions;

export default PAGEController.reducer;