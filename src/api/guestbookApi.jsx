import axios from "axios";

export const API_SERVER_HOST = 'http://localhost:8888';

const prefix = `${API_SERVER_HOST}/api/guestbooks`;

export const postGuestbook = async (guestbookObj) => {
    const res = await axios.post(`${prefix}/`, guestbookObj);
    return res.data;
};

export const getGuestbookList = async () => {
    const res = await axios.get(`${prefix}/`);
    return res.data;
};