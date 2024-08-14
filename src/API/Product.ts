import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import instance from "./axios";
import requests from "./requests";

export interface data {
  p_id : any
  p_name : any
  value : any
  quantity : any
}
const data = {
  p_id : undefined,
  p_name : undefined,
  value : undefined,
  quantity : undefined,
}
export interface Product {
  data : data[]
  isLoading : any
  error : any
}

const initialState: Product = {
  data : [],
  isLoading : undefined,
  error : undefined,
};

export const Product = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setQuantity : (state, action : PayloadAction<any>) =>{\
      const size = state.data.length;
      for(let i = 0;i < size ; i++)
      {
        if(state.data[i].p_id == action.payload.p_id)
        {
          if(action.payload.col == "p_name")
            state.data[i].p_name = action.payload.data;
          if(action.payload.col == "value")
            state.data[i].value = action.payload.data;
          if(action.payload.col == "quantity")
            state.data[i].quantity = action.payload.data;
        } 
      }
    }
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
      const resp = await instance.post(
        requests.insertAll,
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