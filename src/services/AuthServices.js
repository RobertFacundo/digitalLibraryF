import axios from "axios";

const URL = import.meta.env.VITE_API_URL

console.log('API Base URL:', URL);

const API = axios.create({
    baseURL: `${URL}auth`,
    headers: {
        'Content-Type': 'application/json',
    }
});

const request = (endpoint, data) => {
    console.log('Calling API:', `${URL}auth${endpoint}`, 'with data:', data);
    return API.post(endpoint, data);
}

const authService = {
    login: data => request('/login', data),
    signup: data => request('/signup', data),
};

export default authService;