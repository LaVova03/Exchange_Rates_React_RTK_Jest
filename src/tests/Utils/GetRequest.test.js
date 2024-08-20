import axios from 'axios';
import getRequest from '../../utils/getRequest';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('requests', () => {
    it('get request', async () => {
        const mockData = { data: [{ id: 1, name: 'Vova' }] };
        axios.get.mockResolvedValue({ status: 200, data: mockData.data });

        const setData = jest.fn();
        await getRequest(setData);

        expect(setData).toHaveBeenCalledWith(mockData.data);
    });

    it('throw error', async () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
        axios.get.mockRejectedValue(new Error('Failed to fetch data'));

        const setData = jest.fn();
        await getRequest(setData);

        expect(consoleSpy).toHaveBeenCalledWith('Error fetching data:', expect.any(Error));

        consoleSpy.mockRestore();
    });
});
