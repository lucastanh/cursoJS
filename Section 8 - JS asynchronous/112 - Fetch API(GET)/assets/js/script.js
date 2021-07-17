/* 
The Fetch API interface allows web browser to make HTTP requests to web servers.
😀 No need for XMLHttpRequest anymore. 
*/

$('a').click((e) => {
    e.preventDefault();

    const href = $(e.target).attr('href');
    
    loadPage(href);
})

async function loadPage(href) {
    try {
        let response = await fetch(href);
        if(response.status !== 200) throw new Error(response.statusText);
        response = await response.text();
        $('.result').html(response);
    } catch(e) {
        $('.result').html("404 NOT FOUND");
    }
};