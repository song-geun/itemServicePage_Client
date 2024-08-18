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
  date: string
}
const Pdata = {
  prod_data_id: undefined,
  p_id: undefined,
  p_name: undefined,
  value: undefined,
  p_quantity: undefined,
  date: undefined,
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
  Mdata : any
  Pedata : any
  insertdata : any
  isLoading: any
  error: any
}

const initialState: Product = {
  data: [],
  odata: [],
  Mdata : [],
  Pedata : [],
  insertdata : data,
  isLoading: false,
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
    initD: (state) =>{
      const n = state.data.length;
      for (let i = 0; i < n; i++) {
        state.data[i].quantity = 0;
      }
    },
    setinsertD: (state, action : PayloadAction<inp>) =>{
      state.insertdata.p_id = 0;
      if (action.payload.col == "p_name")
        state.insertdata.p_name = action.payload.data;
      if (action.payload.col == "value")
        state.insertdata.value = Number(action.payload.data);
      state.insertdata.quantity = 0;
    },
    initinsertD: (state, action : PayloadAction<any>) =>{
      state.insertdata.p_id = 0;
      state.insertdata.p_name = "";
      state.insertdata.value = 0;
      state.insertdata.quantity = 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(Getsheet.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(Getsheet.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.isLoading = true;
      })
      .addCase(Getsheet.rejected, (state, action: any) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(inupsheet.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(inupsheet.fulfilled, (state, action) => {
        state.isLoading = true;
      })
      .addCase(inupsheet.rejected, (state, action: any) => {
        state.error = action.payload;
        state.isLoading = true;
      })

      .addCase(insheet.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(insheet.fulfilled, (state, action) => {
        state.isLoading = true;
      })
      .addCase(insheet.rejected, (state, action: any) => {
        state.error = action.payload;
        state.isLoading = true;
      })

      .addCase(GetDATAsheet.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(GetDATAsheet.fulfilled, (state, action) => {
          state.odata = action.payload.data;
          state.isLoading = true;
      })
      .addCase(GetDATAsheet.rejected, (state, action: any) => {
          state.error = action.payload;
          state.isLoading = true;
      })


      .addCase(GetDATADATEsheet.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(GetDATADATEsheet.fulfilled, (state, action) => {
          state.odata = action.payload.data;
          state.isLoading = true;
      })
      .addCase(GetDATADATEsheet.rejected, (state, action: any) => {
          state.error = action.payload;
          state.isLoading = true;
      })

      .addCase(GetDATAMONTHsheet.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(GetDATAMONTHsheet.fulfilled, (state, action) => {
          state.Mdata = action.payload.data;
          state.isLoading = true;
      })
      .addCase(GetDATAMONTHsheet.rejected, (state, action: any) => {
          state.error = action.payload;
          state.isLoading = true;
      })

      .addCase(GetDATAPeriodsheet.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(GetDATAPeriodsheet.fulfilled, (state, action) => {
          state.Pedata = action.payload.data;
          state.isLoading = true;
      })
      .addCase(GetDATAPeriodsheet.rejected, (state, action: any) => {
          state.error = action.payload;
          state.isLoading = true;
      })

      .addCase(inupDATAsheet.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(inupDATAsheet.fulfilled, (state, action) => {
        state.isLoading = true;
      })
      .addCase(inupDATAsheet.rejected, (state, action: any) => {
          state.error = action.payload;
          state.isLoading = true;
      })

      .addCase(insertsheet.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(insertsheet.fulfilled, (state, action) => {
        state.isLoading = true;
      })
      .addCase(insertsheet.rejected, (state, action: any) => {
          state.error = action.payload;
          state.isLoading = true;
      })
      

      
      .addCase(deletedata.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deletedata.fulfilled, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deletedata.rejected, (state, action: any) => {
          state.error = action.payload;
          state.isLoading = true;
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
export const GetDATADATEsheet = createAsyncThunk(
  "DataDATElist",
  async (Data:any) => {
      try {
          const resp = await instance.post(requests.DataDATElist, JSON.stringify(Data));
          return resp;
      } catch (e) {
          return undefined;
      }
  }
);

export const GetDATAMONTHsheet = createAsyncThunk(
  "DataMONTHlist",
  async (Data:any) => {
      try {
          const resp = await instance.post(requests.DataMonth, JSON.stringify(Data));
          return resp;
      } catch (e) {
          return undefined;
      }
  }
);

export const GetDATAPeriodsheet = createAsyncThunk(
  "GetDATAPeriodsheet",
  async (Data:any) => {
      try {
          const resp = await instance.post(requests.DataPeriod, JSON.stringify(Data));
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
              requests.DatainsertAll,
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
export const deletedata = createAsyncThunk(
  "delete",
  async (data: any) => {
    try {
      const resp = await instance.post(
        requests.delete,
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
  DATAsetD,
  setinsertD,
  initinsertD,
  initD
} = Product.actions;
export default Product.reducer;