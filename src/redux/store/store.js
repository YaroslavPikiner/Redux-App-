export const initState = {
  tickets: [],
  filteredTickets: [],
  filters: [],
  table: [],
  savedUser: null,
  userId: [],
  userGoogleInfo: null,
  user: JSON.parse(localStorage.getItem('reactUser')),
  listItem: 5,
};
