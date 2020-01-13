const ENDPOINT = 'https://rickandmortyapi.com/api/character/';
const SINGLEID = 'https://rickandmortyapi.com/api/character/';

const fetchData = () => fetch(ENDPOINT).then(response => response.json());
const fetchSingleId = (id) => fetch(SINGLEID+id).then(response => response.json());

export { fetchData, fetchSingleId };

