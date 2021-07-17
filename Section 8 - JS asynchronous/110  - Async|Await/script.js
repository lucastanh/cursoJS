/* The keyword async before a function makes the function return a promise:
The keyword await before a function makes the function wait for a promise:
The await keyword can only be used inside an async function.
 */
function rand(min = 0, max = 3) {
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

async function execute() {
    try{
        const fase1 = await wait("Fase 1", 5000);
        console.log(fase1);
    
        console.log(await wait("Fase 2", rand()));
    
        console.log(await wait("Fase 3", rand()));
    
        console.log("Terminamos")
    } catch(e) {
        console.log(e)
    }
}

execute();

// pending
// fullfilled
// reject

// wait("Connecting to DB", rand(1, 3))
//     .then(answer => {
//         console.log(answer);
//     })
//     .then(answer => {
//         console.log(answer)
//         return wait(1, rand(1, 3));
//     })
//     .then(answer => {
//         console.log(answer)
//     })
//     .then(answer => 
//         console.log("Displaying data")
//     )
//     .catch(e => {
//         console.log(e)
//     })

