// Partial application

const fetch = require("node-fetch");

const getFromAPI = baseURL => endpoint => cb =>
  fetch(`${baseURL}${endpoint}`)
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => console.log(err));

// partially save base url
const getGithub = getFromAPI("https://api.github.com");

// partially save endpoint
const getGithubRepos = getGithub("/repositories");
const getGithubUsers = getGithub("/users");

getGithubRepos(data => {
  console.log(data.map(user => user.url));
});
getGithubUsers(data => {
  console.log(data.map(user => user.login));
});
