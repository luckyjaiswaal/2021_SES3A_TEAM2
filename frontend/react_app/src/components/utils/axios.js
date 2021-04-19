import axios from 'axios';
const { REACT_APP_REST_URL: REST_URL } = process.env;

const instance = axios.create({
	baseURL: REST_URL
});

axios.defaults.withCredentials = true

export default instance;