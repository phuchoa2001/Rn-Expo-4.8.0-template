import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import Cart from './card/slice';

const store = configureStore({
    reducer: {
        Cart 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store;