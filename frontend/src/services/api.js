import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const fetchProjects = async () => {
  return await axios.get(`${API_URL}/projects`);
};

export default {
  fetchProjects
};
