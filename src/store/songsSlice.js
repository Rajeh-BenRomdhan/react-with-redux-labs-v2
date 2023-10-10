import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    list: ["Take Five", "Claire de Lune"],
};
export const songsSlice = createSlice ({
    name: "songs",
    initialState,
    reducers:{
        addsongs: (state, action) => {
            state.list.push(action.payload);
        },
        removeSongs: (state, action) => {
            state.list.splice(action.payload, 1);
        },
        removeAll: (state) => {
            state.list.slice(0,state.list.length);
        },
    },
})
export const  {addsongs, removeSongs, removeAll} =songsSlice.actions;
export default songsSlice.reducer;