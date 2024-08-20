import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
};

const dataSlice = createSlice({
    name: 'mySlice',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
