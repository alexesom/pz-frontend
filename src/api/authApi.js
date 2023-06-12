import axios from 'axios';
import Cookies from 'js-cookie';

const authApi = {
    signup: async (data) => {
        return await axios.post('http://localhost:7070/pl/edu/pw/portal/signup', data);
    },
    signin: async (data) => {
        const response = await axios.post('http://localhost:7070/pl/edu/pw/portal/signin', data);
        if (response.status === 200) {
            Cookies.set('jwt', response.data, { expires: 7 });
            Cookies.set('username', data.username, { expires: 7 });
        }
    }
};

export default authApi;