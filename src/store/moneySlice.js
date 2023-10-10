import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    amount : 0,
};

export const moneySlice = createSlice({
    name: "money",
    initialState,
    reducers: {
        deposit: (state) => {
            state.amount = state.amount + 10 ;
        },
        withdraw: (state) => {
            state.amount = state.amount - 10 ;
        },
    },
});
export const {deposit, withdraw } = moneySlice.actions;
export default moneySlice.reducer;