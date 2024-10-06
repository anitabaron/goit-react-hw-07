import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const handlePending = (state) => {
  state.contacts.loading = true;
};
const handleRejected = (state, action) => {
  state.contacts.loading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
      loading: false,
      error: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log(state);

        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

// addContact: {
//   reducer(state, action) {
//     state.items.push(action.payload);
//   },
//   prepare(name, number) {
//     return {
//       payload: {
//         id: nanoid(),
//         name: name.toString(),
//         number: number.toString(),
//       },
//     };
//   },
// },

// deleteContact: (state, action) => {
//   state.items = state.items.filter(
//     (contact) => contact.id !== action.payload
//   );
// },
