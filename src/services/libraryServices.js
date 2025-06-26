import axios from "axios";

const URL = import.meta.env.VITE_API_URL

const LibraryService = {
    getToken: () => {
        return localStorage.getItem('access_token');
    },

    getAuthHeaders: () => {
        const token = LibraryService.getToken();
        if (token) {
            return {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
        }
        return {}
    },

    addBook: async (bookId) => {
        try {
            const response = await axios.post(`${URL}library?book_id=${bookId}`, null, LibraryService.getAuthHeaders());
            console.log(response, 'log del addbok service')
            return response.data
        } catch (error) {
            console.error('Error adding book to library', error);
            throw error;
        }
    },

    getUserLibrary: async () => {
        try {
            const response = await axios.get(URL, LibraryService.getAuthHeaders());
            return response.data;
        } catch (error) {
            console.error('Error fetching user library', error)
            throw error;
        }
    },
    removeBook: async (bookId) => {
        try {
            const response = await axios.delete(`${URL}library/${bookId}`, LibraryService.getAuthHeaders());
            return response.data;
        } catch (error) {
            console.error('error removing book from library', error)
            throw error;
        }
    }
}

export default LibraryService;