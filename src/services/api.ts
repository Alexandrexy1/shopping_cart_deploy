import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://db-json-lemon.vercel.app',
})

// 