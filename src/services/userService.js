import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/users';

const userService = {
  async createUser(username, password) {
    try {
      const response = await axios.post(BASE_URL, { username, password });
      return response.data;
    } catch (error) {
      throw new Error('Unable to create user.');
    }
  },

  async login(username, password) {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { username, password });
      return response.data.token;
    } catch (error) {
      throw new Error('Incorrect username or password.');
    }
  },

  async getUserInfo(token) {
    try {
      const response = await axios.get(`${BASE_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Unable to get user information.');
    }
  },
};

export default userService;
