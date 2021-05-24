class AviaService {
    async getResources(url) {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(`${res.status}, S serverom Beda`)
        }
        return await res.json();
    }

    getId() {
        return this.getResources('https://front-test.beta.aviasales.ru/search');
    }


    async getTicketFromId() {
        const res = await this.getId();
        const id = res.searchId;
        return await this.getResources(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
    }
  
}

export default AviaService;
