import { createSlice } from "@reduxjs/toolkit";
// import { initialState } from './initialState';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => [...state, action.payload],
    deleteContact: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  },
});

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (state, action) =>  action.payload,
  },
});

export const contactsReducer = contactsSlice.reducer
export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsfilterReduser = contactsFilterSlice.reducer 
export const { filterContact } = contactsFilterSlice.actions;
