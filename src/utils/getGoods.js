import axios from 'axios';
import { MOCK_API } from '../constants';

async function getGoods(setOeders) {
    try {
        const response = await axios.get(`${MOCK_API}/Goods`);
        if (response.status >= 200 && response.status < 300) {
            setOeders(response.data);
        }
    } catch (error) {
        console.error('Error fetching Goods:', error);
    }
}

export default getGoods;
