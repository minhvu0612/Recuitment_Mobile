import axios from 'axios';

export const fetchAllProject = () => axios.get("https://2538-2402-800-61c6-cdf0-80d5-efe8-c73c-7e4c.ngrok.io/v1/api/projects");

export const addProject = (data) => axios.post("https://2538-2402-800-61c6-cdf0-80d5-efe8-c73c-7e4c.ngrok.io/v1/api/projects", data);

export const updateProject = (data, code) => axios.put(`https://2538-2402-800-61c6-cdf0-80d5-efe8-c73c-7e4c.ngrok.io/v1/api/projects/${code}`, data);

export const deleteProject = (code) => axios.delete(`https://2538-2402-800-61c6-cdf0-80d5-efe8-c73c-7e4c.ngrok.io/v1/api/projects/${code}`);