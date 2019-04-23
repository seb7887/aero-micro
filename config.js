require('dotenv').config();

const oneDay = 24 * 60 * 60 * 1000;
const token = process.env.API_KEY;
const apiEndpoint = 'https://aerolab-challenge.now.sh';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
};

module.exports = { oneDay, apiEndpoint, headers };
