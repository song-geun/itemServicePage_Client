import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import instance from "./axios";
import requests from "./requests";

export interface Pdata {
    prod_data_id : number
    p_id: number
    p_name: string
    value: number
    quantity: number
    DATE : string
}
const Pdata = {
    prod_data_id : undefined,
    p_id: undefined,
    p_name: undefined,
    value: undefined,
    quantity: undefined,
    DATE : undefined,
}

export interface DATAinp {
    prod_data_id : number
    col: string
    data: string
}
export interface ProductDATA {
    data: Pdata[]
    isLoading: any
    error: any
}

const initialState: ProductDATA = {
    data: [],
    isLoading: undefined,
    error: undefined,
};

export const ProductDATA = createSlice({
    name: "ProductDATA",
    initialState,
    reducers: {
        DATAsetD: (state, action: PayloadAction<DATAinp>) => {
            const n = state.data.length;
            for (let i = 0; i < n; i++) {
                if (state.data[i].prod_data_id.toString() === action.payload.prod_data_id.toString()) {
                    if(action.payload.col == "p_id")
                        state.data[i].p_id = Number(action.payload.data)
                    if (action.payload.col == "p_name")
                        state.data[i].p_name = action.payload.data;
                    if (action.payload.col == "value")
                        state.data[i].value = Number(action.payload.data);
                    if (action.payload.col == "quantity")
                        state.data[i].quantity = Number(action.payload.data);
                    if (action.payload.col == "DATE")
                        state.data[i].DATE = action.payload.data;
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetDATAsheet.pending, (state) => {
            })
            .addCase(GetDATAsheet.fulfilled, (state, action) => {
                state.data = action.payload.data;
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



export const GetDATAsheet = createAsyncThunk(
    "list",
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
    "insertAll",
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
    "insert",
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

export const {
    DATAsetD
} = ProductDATA.actions;
export default ProductDATA.reducer;