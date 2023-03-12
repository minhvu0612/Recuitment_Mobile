import axios from 'axios';

export const fetchAllProject = () => axios.get(" https://0fea-2402-800-61c6-cdf0-14a2-4f7a-ec08-e63d.ngrok.io/api/projects");

export const addProject = (data) => axios.post(" https://0fea-2402-800-61c6-cdf0-14a2-4f7a-ec08-e63d.ngrok.io/api/projects", data);