// const promise = Promise.resolve('hello');

// promise.then(greeting => console.log(greeting))

// const lies = Promise.reject('Haha, stupid');

// lies
//     .then(insult => {
//         // never happens
//         console.log('nope!')
//     })
//     .catch(insult => {
//         console.log(insult)
//     })

const maybe = new Promise((resolve, reject) => {
    const randomNumber = Math.random()

    if(randomNumber < 0.5){
        reject('DENIED!')
    } else {
        setTimeout(() => resolve('YES!'), 1000)
    }
});

maybe
    .then((answer) => {
        console.log(answer)
    })
    .catch(err => {
        console.log(err)
    })

