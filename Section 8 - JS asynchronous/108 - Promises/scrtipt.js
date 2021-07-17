/* 
A JavaScript Promise object contains both the producing code and calls to the consuming code:
create a promise using the promise constructor (new Promise(resolve, reject))
resolve -> all resolves will arive at then
reject -> all reject wil arive at catch
*/
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    let r = Math.random() * (max - min) + min
    return r.toFixed(0);
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject("Bad Value");
        setTimeout(() => {
            resolve(msg);
        }, time)
    });
}

wait("Connecting to DB", rand(1, 3))
    .then(answer => {
        console.log(answer);
        return wait("Looking for data", rand(1, 3));
    })
    .then(answer => {
        console.log(answer)
        return wait(1, rand(1, 3));
    })
    .then(answer => {
        console.log(answer)
    })
    .then(() => console.log("Displaying data")
    )
    .catch(e => {
        console.log(e)
    })

// console.log("This will be shown first of all")

// wait('Frase 1', rand(1, 3), function() {
//     wait('Frase 2', rand(1, 3), function() {
//         wait('Frase 3', rand(1, 3))
//     })
// });
