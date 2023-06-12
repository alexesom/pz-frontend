import axios from 'axios';
import Cookies from 'js-cookie';

const subscriptionApi = {
    createSubscription: async (data) => {
        const jwt = Cookies.get('jwt');
        if (!jwt) return;

        return await axios.post('http://localhost:7070/pl/edu/pw/portal/subscription', data, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
    },
    deleteSubscription: async (id) => {
        const jwt = Cookies.get('jwt');
        if (!jwt) return;

        return await axios.delete(`http://localhost:7070/pl/edu/pw/portal/subscription/${id}`, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
    },
    getSubscriptionsForUser: async (id = '') => {
        let jwt = Cookies.get('jwt');
        if (!jwt) return;

        let url = `http://localhost:7070/pl/edu/pw/portal/subscription/all`;

        if (id !== '') {
            url += `?userId=${id}`;
        }
        return await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        });
    }
}

export default subscriptionApi;