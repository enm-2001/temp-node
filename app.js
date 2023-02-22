const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end("Welcome to the home page!!")
// })

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome to the home page")
    }
    if(req.url === '/about'){
        res.end("Here is our short history")
    }
    res.end(`
        <h1>Oops!!</h1>
        <p>We can't seem to find the page u r looking for</p>
        <a href="/">Back Home</a>
    `)
})

server.listen(5000);