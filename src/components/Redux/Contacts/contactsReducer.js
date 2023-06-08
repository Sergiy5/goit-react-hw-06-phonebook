import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './initialState'


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => [...state, action.payload],
  },
  deleteContact: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  filterContact: (state, action) => action.payload,
});

export const contactsReducer = contactsSlice.reducer
export const { addContact, deleteContact, filterContact } = contactsSlice.actions;


// export const contactsReducer = createReducer([], {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });

// export const filterReducer = createReducer('', {
//   [filterContact]: (state, action) => action.payload,
// });