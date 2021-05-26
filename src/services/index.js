const getResources = async (url) => {
    const data = await fetch(url).then((response) => response.json());
    return data;
}

export const fetchTableData = async () => {
    const data = await getResources('https://jsonplaceholder.typicode.com/users');
    return data;
}

export const fetchIdTicket = async () => {
    const data = await getResources('https://front-test.beta.aviasales.ru/search');
    return data;
}

export const fetchTicketsFromIdx = async () => {
    const res = await fetchIdTicket();
    const id = res.searchId;
    const resTickets = await getResources(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`
    )
    return resTickets.tickets
}