import axios from 'axios';
import { MOCK_API } from '../constants';

async function getRequest(setData) {
    try {
        const response = await axios.get(`${MOCK_API}/Products`);
        if (response.status >= 200 && response.status < 300) {
            setData(response.data);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default getRequest;
