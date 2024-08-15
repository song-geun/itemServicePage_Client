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
export interface Pdata {
  prod_data_id: number
  p_id: number
  p_name: string
  value: number
  p_quantity: number
  DATE: string
}
const Pdata = {
  prod_data_id: undefined,
  p_id: undefined,
  p_name: undefined,
  value: undefined,
  p_quantity: undefined,
  DATE: undefined,
}

export interface DATAinp {
  prod_data_id: number
  col: string
  data: string
}
export interface inp {
  p_id: number
  col: string
  data: string
}
export interface Product {
  data: any
  odata: any
  isLoading: any
  error: any
}

const initialState: Product = {
  data: [],
  odata: [],
  isLoading: undefined,
  error: undefined,
};

export const Product = createSlice({
  name: "Product",
  initialState,
  reducers: {
    DATAsetD: (state, action: PayloadAction<DATAinp>) => {
      const n = state.odata.length;
      for (let i = 0; i < n; i++) {
        if (state.odata[i].prod_data_id.toString() === action.payload.prod_data_id.toString()) {
          if (action.payload.col === "p_id")
            state.odata[i].p_id = Number(action.payload.data)
          if (action.payload.col === "p_name")
            state.odata[i].p_name = action.payload.data;
          if (action.payload.col === "value")
            state.odata[i].value = Number(action.payload.data);
          if (action.payload.col === "quantity")
            state.odata[i].quantity = Number(action.payload.data);
          if (action.payload.col === "DATE")
            state.odata[i].DATE = action.payload.data;
        }
      }
    },
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

      .addCase(insheet.pending, (state) => {
      })
      .addCase(insheet.fulfilled, (state, action) => {
      })
      .addCase(insheet.rejected, (state, action: any) => {
        state.error = action.payload;
      })

      .addCase(GetDATAsheet.pending, (state) => {
      })
      .addCase(GetDATAsheet.fulfilled, (state, action) => {
          state.odata = action.payload.data;
      })
      .addCase(GetDATAsheet.rejected, (state, action: any) => {
          state.error = action.payload;
      })

      .addCase(inupDATAsheet.pending, (state) => {
      })
      .addCase(inupDATAsheet.fulfilled, (state, action) => {
      })
      .addCase(inupDATAsheet.rejected, (state, action: any) => {
          state.error = action.payload;
      })

      .addCase(insertsheet.pending, (state) => {
      })
      .addCase(insertsheet.fulfilled, (state, action) => {
      })
      .addCase(insertsheet.rejected, (state, action: any) => {
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

export const GetDATAsheet = createAsyncThunk(
  "Datalist",
  async () => {
      try {
          const resp = await instance.get(requests.Datalist);
          return resp;
      } catch (e) {
          return undefined;
      }
  }
);
export const inupDATAsheet = createAsyncThunk(
  "DatainsertAll",
  async (data: any) => {
      try {
          const resp = await instance.post(
              requests.DatainsertAll,
              JSON.stringify(data.data)
          );
          return resp;
      } catch (e) {
          return undefined;
      }
  }
)
export const insertsheet = createAsyncThunk(
  "Datainsert",
  async (data: any) => {
      try {
          const resp = await instance.post(
              requests.Datainsert,
              JSON.stringify(data)
          );
          return resp;
      } catch (e) {
          return undefined;
      }
  }
)


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
export const insheet = createAsyncThunk(
  "insert",
  async (data: any) => {
    try {
      console.log(data);
      const resp = await instance.post(
        requests.insert,
        JSON.stringify(data)
      );
      return resp;
    } catch (e) {
      return undefined;
    }
  }
)

export const {
  setD,
  DATAsetD
} = Product.actions;
export default Product.reducer;