import { createSlice, isAction, PayloadAction } from "@reduxjs/toolkit";

export interface PAGEController {
    sheetnum : number,
    sheet2input : boolean,
    DATE : string,
    DATE2 : string,
    sheet1key : number,
}

const initialState: PAGEController = {
    sheetnum : 0,
    sheet2input : false,
    DATE : "",
    DATE2 : "",
    sheet1key : -1,
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
      setSheet3input : (state, action: PayloadAction<any>) => {
        state.DATE = action.payload;
      },
      setSheet5input : (state, action: PayloadAction<any>) => {
        state.DATE2 = action.payload;
      },
      setSheet1key : (state, action: PayloadAction<any>) => {
        state.sheet1key = action.payload;
      },
    },
}
);
export const {
    setSheet,
    setSheet2input,
    setSheet3input,
    setSheet5input,
    setSheet1key
} = PAGEController.actions;

export default PAGEController.reducer;