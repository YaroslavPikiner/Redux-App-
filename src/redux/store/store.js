export const initState = {
  tickets: [],
  filteredTickets: [],
  filters: [],
  user: JSON.parse(localStorage.getItem('reactUser')),
  listItem: 5,
};
