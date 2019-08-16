// function sayHi() {
//     console.log("Hi")
// }
// setTimeout(sayHi, 2000)

const documents = {
    1: {content: "I am a document", authorId: 1},
    2: {content: "I am also a document", authorId: 2},
    3: {content: "You guessed it!", authorId: 2}
}
const authors = {
    1: {name: "Adam"},
    2: {name: "Dave"}
}

// documentId = 1 callback = console.log 

// documentId = 2 callback = (object) => {
//     console.log(object.content.toUpperCase())
// }

function getDocument(documentId, callback) {
    function loadComplete() {
        callback(documents[documentId])
    }
    setTimeout(loadComplete, 1000)
}

function getAuthor(authorId, callback) {
    function loadComplete() {
        callback(null, authors[authorId])
    }
    setTimeout(loadComplete, 100)
}


// getDocument(1, console.log)
// getDocument(2, (document) => {
//     console.log(document.content.toUpperCase())
// })


// challenge: 
// call getDocuments with an id
// ihn the callback call getAuthor 
// with the authorId from the document

getDocument(3, (document) => {
    getAuthor(document.authorId, (error, response) => {
        console.log(response)
        console.log(error)
    })
})
