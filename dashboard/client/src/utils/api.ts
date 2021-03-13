import axios from "axios";

export function getUserInfo() {
    return axios.get(`http://localhost:5000/api/auth/authenticated`, { withCredentials: true });
}
