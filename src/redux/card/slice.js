import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
  initialState : {},
  name: 'cardSlice',
  reducers: {
    addCart: (state , payload) => {
    }
  }
})

export default cardSlice.reducer

export const { addCart } = cardSlice.actions
