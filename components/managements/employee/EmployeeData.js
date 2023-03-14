import axios from 'axios';

export const fetchAllEmployee = () => axios.get('https://2538-2402-800-61c6-cdf0-80d5-efe8-c73c-7e4c.ngrok.io/v1/api/employees');

export const addEmployee = (data) => axios.post("https://2538-2402-800-61c6-cdf0-80d5-efe8-c73c-7e4c.ngrok.io/v1/api/employees", data);

export const updateEmployee = (data, code) => axios.put(`https://2538-2402-800-61c6-cdf0-80d5-efe8-c73c-7e4c.ngrok.io/v1/api/employees/${code}`, data);

export const deleteEmployee = (code) => axios.delete(`https://2538-2402-800-61c6-cdf0-80d5-efe8-c73c-7e4c.ngrok.io/v1/api/employees/${code}`);