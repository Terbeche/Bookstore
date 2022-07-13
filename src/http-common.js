import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
export default axios.create({
  baseURL: url,
  headers: {
    'Content-type': 'application/json',
  },
});
