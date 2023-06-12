import axios from 'axios';
import Cookies from 'js-cookie';

const articleApi = {
    createArticle: async (data) => {
        const token = Cookies.get('jwt');
        if (!token) return;

        return await axios.post('http://localhost:7070/pl/edu/pw/portal/article', data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

    },
    updateArticle: async (id, data) => {
        const token = Cookies.get('jwt');
        if (!token) return;

        return await axios.put(`http://localhost:7070/pl/edu/pw/portal/article/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

    },
    deleteArticle: async (id) => {
        const token = Cookies.get('jwt');
        if (!token) return;

        return await axios.delete(`http://localhost:7070/pl/edu/pw/portal/article/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

    },
    searchArticles: async (params) => {
        return await axios.get('http://localhost:7070/pl/edu/pw/portal/article/search', { params });
    }
}

export default articleApi;