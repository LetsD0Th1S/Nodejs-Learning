// npm - global command, comes with node
// npm --version, or npm --v

// local dependency - use it only in this particular object
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (for mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties, etc)
// npm init (step-by-step, press enter to skip)
// npm init -y (everything default)


// DEPENDENCIES SECTION BELOW

// const _ = require('lodash')

// const items = [1,  [2,[3, [4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems);
// console.log('Hello Peeps!');

// 

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Home Page')
    }
    if(req.url == '/about'){
        // BLOCKING CODE !!!
        for(let i = 0; i < 1000;i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`);
            }
          }
        res.end('About Page')
    }
    res.end('Error Page');
})

server.listen(5000,()=>{
    console.log('Server is listening on port 5000...');   
})

