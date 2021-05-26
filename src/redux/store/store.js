export const initState = {
  tickets: [],
  filteredTickets: [],
  filters: [],
  table: [],
  savedUser: null,
  userId: [],
  user: JSON.parse(localStorage.getItem('reactUser')),
  listItem: 5,
};
