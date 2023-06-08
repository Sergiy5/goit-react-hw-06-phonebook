import { configureStore } from '@reduxjs/toolkit';

import {persistReducer, persistStore} from 'redux-persist' 
import storage from 'redux-persist/lib/storage'
import { reducer } from './reducer';

const persistConfig = {
  key: 'contacts',
    storage,
}

export const persistedReducer = persistReducer(persistConfig, reducer);
console.log('1', persistedReducer);
export const store = configureStore({
 reducer: persistedReducer,
});
export const persistor = persistStore(store) 

// import { createAction, createReducer } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('contacts/deleteContact');
// export const filterContact = createAction('contacts/filterContact');

// const contactsReducer = createReducer([], {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
  
// });

// const filterReducer = createReducer('', {
//   [filterContact]: (state, action) => action.payload
// });



//  reducer: {
//     contacts: contactsReducer,
//     filter: filterContact,
//   },