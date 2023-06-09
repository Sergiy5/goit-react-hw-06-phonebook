import {configureStore} from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; 
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './reducer';

const persistConfig = {
  key: 'phoneBook',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store) 


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