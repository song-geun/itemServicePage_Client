import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import instance from "./axios";
import requests from "./requests";

export interface data {
  p_id: number
  p_name: string
  value: number
  quantity: number
}
const data = {
  p_id: undefined,
  p_name: undefined,
  value: undefined,
  quantity: undefined,
}

export interface inp {
  p_id: number
  col: string
  data: string
}
export interface Product {
  data: any
  isLoading: any
  error: any
}

const initialState: Product = {
  data: [],
  isLoading: undefined,
  error: undefined,
};

export const Product = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setD: (state, action: PayloadAction<inp>) => {
      const n = state.data.length;
      for (let i = 0; i < n; i++) {
        if (state.data[i].p_id.toString() === action.payload.p_id.toString()) {
          if (action.payload.col == "p_name")
            state.data[i].p_name = action.payload.data;
          if (action.payload.col == "value")
            state.data[i].value = Number(action.payload.data);
          if (action.payload.col == "quantity")
            state.data[i].quantity = Number(action.payload.data);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Getsheet.pending, (state) => {
      })
      .addCase(Getsheet.fulfilled, (state, action) => {
        state.data = action.payload.data;
      })
      .addCase(Getsheet.rejected, (state, action: any) => {
        state.error = action.payload;
      })
      .addCase(inupsheet.pending, (state) => {
      })
      .addCase(inupsheet.fulfilled, (state, action) => {
      })
      .addCase(inupsheet.rejected, (state, action: any) => {
        state.error = action.payload;
      })
  }
});
/*
export const Create = createAsyncThunk("post/Create", async (data: any) => {
  try {
    console.log(data);
    const resp = await instanceJSON.post(requests.create, JSON.stringify(data));

    return resp;
  } catch (e) {
    console.log(e);
    return undefined;
  }
});

export const dragNdrop = createAsyncThunk(
  "post/dragNdrop",
  async (data: any) => {
    try {
      const resp = await instanceJSON.patch(
        requests.modify,
        JSON.stringify(data)
      );
      return resp;
    } catch (e) {
      return undefined;
    }
  }
);
*/
export const Getsheet = createAsyncThunk(
  "list",
  async () => {
    try {
      const resp = await instance.get(requests.list);
      return resp;
    } catch (e) {
      return undefined;
    }
  }
);
export const inupsheet = createAsyncThunk(
  "insertAll",
  async (data: any) => {
    try {
      console.log(data.data);
      const resp = await instance.post(
        requests.insertAll,
        JSON.stringify(data.data)
      );
      return resp;
    } catch (e) {
      return undefined;
    }
  }
)

export const {
  setD
} = Product.actions;
export default Product.reducer;