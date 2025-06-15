require('dotenv').config()
const axios = require('axios');

// script that whitelists developers on NEFAC's firewall when running in development
// uses an AWS Lambda function instead of connecting directly to the Sucuri firewall API

const { WHITELIST_LAMBDA_API_KEY, WHITELIST_LAMBDA_URL } = process.env;

if (!WHITELIST_LAMBDA_API_KEY || !WHITELIST_LAMBDA_URL) {
  console.error('Missing WHITELIST_LAMBDA_API_KEY or WHITELIST_LAMBDA_URL in .env file');
  process.exit(1);
}

console.log("Attempting to whitelist you on NEFAC's firewall...");
axios.post(WHITELIST_LAMBDA_URL, null, {
  headers: {
    'x-api-key': WHITELIST_LAMBDA_API_KEY,
  },
})
.then(response => {
  if (response.data.success) {
    console.log("Whitelist attempt successful.");
  } else {
    console.log('Unsuccessful whitelist attempt: ', response.data);
  }
})
.catch(error => {
  if (error.response) {
    console.error('Error:', error.response.status, error.response.data);
  } else {
    console.error('Request Error:', error.message);
  }
});