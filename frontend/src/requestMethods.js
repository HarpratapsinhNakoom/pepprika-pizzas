import axios from 'axios'

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzhjYzJkYTRhMzYyZjZjOGViMjE1ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDE0MDk0OCwiZXhwIjoxNjcwNDAwMTQ4fQ.oEUgNpVXZGhOJZR1FFeSXCyIYqxksfGIpP1WU1hhS60";

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers :{token:`Bearer ${TOKEN}`},
})