// xhr = XMLHttpRequest
// AJAX = Asynchronous JavaScript and XML

$('a').click((e) => {
    e.preventDefault();

    const href = $(e.target).attr('href');
    
    loadPage(href);
})

async function loadPage(href) {

    const objConfig = {
        method: 'GET',
        url: href,
    };

    try {
        const response = await request(objConfig);
        $('.result').html(response);
    } catch(e) {
        console.log(e);
    }
};

const request = obj => {
    return new Promise((resolve, reject) => {

        // Create an XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Send a Request to a server
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        // Define a callback function
        $(xhr).load(obj.url, () => {    
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        }) 
        
    });
}