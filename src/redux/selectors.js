export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilter = (state) => state.filters.name;

export const selectContacts = (state) => {
  console.log("Contacts from state:", state.contacts.contacts.items);
  return state.contacts.contacts.items;
};
