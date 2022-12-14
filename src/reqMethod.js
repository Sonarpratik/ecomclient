import axios from "axios";

// const BASE_URL = `http://localhost:5000/api/`;
const BASE_URL = `https://ecombackend.sonarpratik.repl.co/api/`;
const Token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTIzNTA4YzdmOWFlZTExMjUxOWQyMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjcyMjE2NSwiZXhwIjoxNjYyOTgxMzY1fQ.ktOIFeJ96bQYEGMgviBLNTdlE8v5vOvym6LUJ7fd8X8`;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${Token}` },
});
