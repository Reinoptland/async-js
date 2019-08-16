const fetch = require('node-fetch')
const axios = require('axios')

const promise = fetch("https://swapi.co/api/films/1/")

// console.log(promise);

// simple request
// promise
//     .then(response => {
//         return response.json()
//     })
//     .then(json => {
//         // console.log(json)
//     })
//     .catch(err => {
//         // console.log(err)
//     })

const promise2 = fetch("https://swapi.co/api/films/1/")
    
// simple request
// promise2
//     .then(response => {
//         return response.json()
//     })
//     .then(json => {
//         const character = json.characters[0] // this is a url
//         return fetch(character)
//     })
//     .then(response => {
//         return response.json()
//     })
//     .then(json => {
//         console.log(json) // should be luke skywalker
//     })
//     .catch(err => {
//         console.log(err)
//     })

// promise2
//     .then(response => response.json())
//     .then(json => fetch(json.characters[0]))
//     .then(response => response.json())
//     .then(json => console.log(json)) // should be luke skywalker)
//     .catch(err => console.log(err))

const promise3 = axios.get("https://swapi.co/api/films/1/");

promise3.then(response => {
    console.log(response.data)
})