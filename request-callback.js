const https = require("https")

// simple request

// making a request for the first starwars movie
https
  .get("https://swapi.co/api/films/1/", resp => {
    let data = ""

    // as we get chunks of data add them together
    resp.on("data", chunk => {
      data += chunk
    })

    // when the request is finished...
    resp.on("end", () => {

      // console.log all the data from the request
      console.log(JSON.parse(data))

    })
  })
  .on("error", err => {
    console.log("Error: " + err.message)
  })

// nested request

https
  // making a request for the first starwars movie
  .get("https://swapi.co/api/films/1/", resp => {
    let data = ""

    // as we get chunks of data add them together
    resp.on("data", chunk => {
      data += chunk
    })

    // first request is finished
    resp.on("end", () => {
      const json = JSON.parse(data)

      // make another request, 
      // this time for the first character of the movie
      // we got the url from the previous request
      
      const characterUrl = json.characters[0]

      https.get(characterUrl, resp => {
        let data = ""

        resp.on("data", chunk => {
          data += chunk
        })

        resp.on("end", () => {

          // the final output ... 
          // nested 6 levels deep >.<
          console.log(JSON.parse(data))
        })
      })
      .on("error", err => {
        console.log("Error: " + err.message)
      })

    })
  })
  .on("error", err => {
    console.log("Error: " + err.message)
  })