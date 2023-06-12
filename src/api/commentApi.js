import axios from 'axios';
import Cookies from 'js-cookie';

const commentsApi = {
    getCommentsForArticle: async (id) => {
        return await axios.get(`http://localhost:7070/pl/edu/pw/portal/comment?postId=${id}`);
    },
    createComment: async (data) => {
        const jwt = Cookies.get('jwt');
        if (!jwt) return;

        return await axios.post('http://localhost:7070/pl/edu/pw/portal/comment', data, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
    },
    updateComment: async (id, data) => {
        const jwt = Cookies.get('jwt');
        if (!jwt) return;

        return await axios.put(`http://localhost:7070/pl/edu/pw/portal/comment/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
    },
    deleteComment: async (id) => {
        const jwt = Cookies.get('jwt');
        if (!jwt) return;

        return await axios.delete(`http://localhost:7070/pl/edu/pw/portal/comment/${id}`, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
    }
};

export default commentsApi;