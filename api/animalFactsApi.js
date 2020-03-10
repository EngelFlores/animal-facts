import axios from 'axios';

const URL = 'https://cat-fact.herokuapp.com/facts';

export default {
  async getAll() {
    return await axios.get(URL);
  }
};
