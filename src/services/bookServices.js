import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const API = axios.create({
    baseURL: URL,
});

const bookService = {
    getBooks: ()=> API.get('/books'),
};

export default bookService;