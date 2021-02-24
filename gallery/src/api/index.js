import axios from 'axios';

const url = 'http://localhost:5000/gallery';

export const fetchAlbums = () => axios.get(url);