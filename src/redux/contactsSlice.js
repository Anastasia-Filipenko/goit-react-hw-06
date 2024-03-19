import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// import contacts from '../components/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
