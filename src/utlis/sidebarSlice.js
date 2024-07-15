import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleManu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})


export const {toggleManu} = sidebarSlice.actions;
export default sidebarSlice.reducer;