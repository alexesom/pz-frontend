import axios from 'axios';
import Cookies from 'js-cookie';

const topicApi = {
    getTopic: async (id) => {
        return await axios.get(`http://localhost:7070/pl/edu/pw/portal/topic/${id}`);
    },
    saveTopic: async (data) => {
        const jwt = Cookies.get('jwt');
        if (!jwt) return;

        return await axios.post('http://localhost:7070/pl/edu/pw/portal/topic', data, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
    },
    getAllTopics: async (title = '') => {
        let url = 'http://localhost:7070/pl/edu/pw/portal/topic/all';

        if (title !== '') {
            url += `?title=${title}`;
        }
        return await axios.get(url);
    },
    updateTopic: async (id, data) => {
        const jwt = Cookies.get('jwt');
        if (!jwt) return;

        return await axios.put(`http://localhost:7070/pl/edu/pw/portal/topic/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
    },
    deleteTopic: async (id) => {
        const jwt = Cookies.get('jwt');
        if (!jwt) return;

        return await axios.delete(`http://localhost:7070/pl/edu/pw/portal/topic/${id}`, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
    },
    getTopicsForUser: async (id) => {
        return await axios.get(`http://localhost:7070/pl/edu/pw/portal/topic/all/by_user/${id}`);
    }
};

export default topicApi;