import { combineReducers } from "@reduxjs/toolkit";
import { contactsfilterReduser, contactsReducer } from "./Contacts/contactsReducer";


export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: contactsfilterReduser,
});
