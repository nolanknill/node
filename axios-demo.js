// commonJS fromat
const axios = require('axios');

const tvShowId = process.argv[2];
const getTVShowsEndpoint = "https://62f1099325d9e8a2e7c47836.mockapi.io/api/v1/tv-shows/" + tvShowId;

axios
    .get(getTVShowsEndpoint)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log("Error");
    })