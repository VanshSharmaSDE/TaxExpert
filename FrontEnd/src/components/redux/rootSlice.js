import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name:"root",
    initialState: {
        loading:false,
        data:null,
    },
    reducers :{
        ShowLoading : (state , action) =>{
            state.loading = true;
        },
        HideLoading : (state , action) =>{
            state.loading = false;
        },
        SetData : (state , action) =>{
            state.data = action.payload;
        },
        SetToken : (state , action) =>{
            state.token = action.payload;
        }
    }
})


export default rootSlice.reducer;
export const {ShowLoading , HideLoading , SetData , SetToken } = rootSlice.actions