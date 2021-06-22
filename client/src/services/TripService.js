import axios from 'axios';

import { getAccessToken } from './AuthService';

export const getTrip = async(id) => {
    const url = `http://localhost:8000/api/trip/${id}/`;
    const token = getAccessToken();
    const headers = { Authorization: `Bearer ${token}` };

    try {
        const response = await axios.get(url, { headers });
        return { response, isError: false };
    } catch (response) {
        return { response, isError: true };
    }
};

export const getTrips = async() => {
    const url = 'http://localhost:8000/api/trip/';
    const token = getAccessToken();
    const headers = { Authorization: `Bearer ${token}` };

    try {
        const response = await axios.get(url, { headers });
        return { response, isError: false };
    } catch (response) {
        return { response, isError: true };
    }
};