import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
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
      .addCase(fetchContacts.fullfield, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fullfield, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fullfield, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
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
