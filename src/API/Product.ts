import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import instance from "./axios";

export interface data {
  p_id : any
  p_name : any
  value : any
  quatity : any
}
const data = {
  p_id : undefined,
  p_name : undefined,
  value : undefined,
  quatity : undefined,
}
export interface Product {
  data : data
  isLoading : any
  error : any
}

const initialState: Product = {
  data : data,
  isLoading : undefined,
  error : undefined,
};

export const Product = createSlice({
  name: "Product",
  initialState,
  reducers: {
    
  },
  extraReducers : (builder) =>{
    builder
      .addCase(Getsheet.pending, (state) =>{
      })
      .addCase(Getsheet.fulfilled, (state,action)=>{
        state.data = action.payload;
      })
      .addCase(Getsheet.rejected, (state, action: any) =>{
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
      const resp = await instance.get();
      console.log(resp);
      return resp;
    } catch (e) {
      console.log("error");
      return undefined;
    }
  }
);
export const inupsheet = createAsyncThunk(
  "insertAll",
  async (data: any) => {
    try {
      const resp = await instance.post(
        JSON.stringify(data)
      );
      return resp;
    } catch (e) {
      return undefined;
    }
  }
)

export const {
  
} = Product.actions;
export default Product.reducer;