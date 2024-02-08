#!/usr/bin/node
const request = require('request');
request(`https://swapi-api.alx-tools.com/api/films/:id${process.argv[2]}`, function (error, response, body) {
    const responseBody = JSON.parse(body)
    console.log(responseBody.title); 
});