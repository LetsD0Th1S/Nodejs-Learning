
const http = require('http');

// req and res are standard parameters/arguments that is used by many devs. 
const server = http.createServer((req,res)=>{
    console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our homepage');
    }
    if(req.url === '/about'){
        res.end('Here is our about history');
    }
    res.end(`<h1> Oops!</h1>
        <p>We can't seem to find the page you are looking for.</p>
        <a href='/'>Back to home page</a>`)
// res.write('Welcome to the homepage');
// res.end();
})

// The server port to listen to
server.listen(5000)