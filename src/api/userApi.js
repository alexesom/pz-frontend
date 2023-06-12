import axios from 'axios';
import Cookies from 'js-cookie';

const userApi = {
    getUser: async (id = '') => {
        const jwt = Cookies.get('jwt');
        if (!jwt) return;

        let url = 'http://localhost:7070/pl/edu/pw/portal/user';

        if (id !== '') {
            url += `?id=${id}`;
        }

        return await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
    },
    updateUser: async (data) => {
        const jwt = Cookies.get('jwt');
        if (!jwt) return;

        return await axios.put('http://localhost:7070/pl/edu/pw/portal/user', data, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
    },
    deleteUser: async () => {
        const jwt = Cookies.get('jwt');
        if (!jwt) return;

        return await axios.delete('http://localhost:7070/pl/edu/pw/portal/user', {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
    },
    getAllUsers: async (page, size) => {
        page = page || 0;
        size = size || 10;

        return await axios.get(`http://localhost:7070/pl/edu/pw/portal/user/all?page=${page}&size=${size}`);
    },
    getUserByUsername: async (username) => {
        return await axios.get(`http://localhost:7070/pl/edu/pw/portal/user/by_username/${username}`);
    }
};

export default userApi;