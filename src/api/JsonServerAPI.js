import axios from "axios";

const JsonServerAPI = axios.create({
    baseURL: "http://localhost:3001/",
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default JsonServerAPI;
