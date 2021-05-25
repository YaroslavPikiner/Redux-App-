export const initState = {
  tickets: [],
  filteredTickets: [],
  filters: [],
  table: [],
  user: JSON.parse(localStorage.getItem('reactUser')),
  listItem: 5,
};
