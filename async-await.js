const fetch = require('node-fetch')

const getLuke = async () => {
    const response = await fetch("https://swapi.co/api/films/1/")
    const json = await response.json()
    const response2 = await fetch(json.characters[0])
    const json2 = await response2.json()

    console.log(json2)
}

getLuke()