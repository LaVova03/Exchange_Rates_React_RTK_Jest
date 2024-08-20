import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';

const store = configureStore({
    reducer: {
        mySlice: dataReducer,
    },
});

export default store;
