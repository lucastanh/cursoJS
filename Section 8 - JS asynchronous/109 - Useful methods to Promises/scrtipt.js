function rand(min, max) {
    min *= 1000;
    max *= 1000;
    let r = Math.random() * (max - min) + min
    return r.toFixed(0);
}

function wait(msg, time, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject("Error");
                return;
            }    
            resolve(msg);
        }, time)
    });
}

const promises = [
    // wait(1000, rand(1, 3)),
    wait("Pomise 1", rand(1, 3)),
    wait("Pomise 2", rand(1, 3)),
    wait("Pomise 3", rand(1, 3)),
]
// return a single Promise which resolves all Promises into a iterable argument
// Promise.all(promises)
//     .then(function(value) {
//         console.log(value)
//     })
//     .catch(function(e) {
//         console.log(e)
//     })

// returns the first promise that was resolved
// Promise.race(promises)
//     .then(function(value) {
//         console.log(value)
//     })
//     .catch(function(e) {
//         console.log(e)
//     })


// function downloadPage() {
//     let inCache = true;

//     if(inCache) {
//         return Promise.resolve("Page in cache");
//     } else {
//         console.log('Waiting for page download...')
//         return wait("Download complete...", rand(1, 3));
//     }
// }
// downloadPage()
//     .then(data => console.log(data))
//     .catch(e => console.log(e));


// function downloadPage2() {
//     let inCache = true;

//     if(inCache) {
//         return Promise.reject("Page in cache");
//     } else {
//         return wait("Download complete...", rand(1, 3));
//     }
// }
// downloadPage2()
//     .then(data => console.log(data))
//     .catch(e => console.log(e));






