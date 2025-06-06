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

const { readFile,writeFile } = require('fs');
const path = require('path');
const util = require('util');

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)




 const start = async() =>{
    //the async function here is useful when we first wait for the Promise above to be resolved.
    try {
        const first = await readFilePromise('./content/first.txt','utf-8');
        const second = await readFilePromise('./content/second.txt','utf-8');
        await writeFilePromise('./content/result-mind-grenade.txt',
            `THIS IS AWESEOME: ${first} ${second}`)
        console.log(first + '\n' + second);
    } catch (error) {
        console.log(error);
        
    }

    
 }

 start()



// Use case / applied before introducing the util module
// const getText = (path) => {
//     return new Promise((resolve,reject)=>{
//      readFile(path,'utf-8',(err,data)=>{
//         if(err){
//         reject(err)
//         }else{
//         resolve(data)    
//    }
//  })
//    })
// }

//  const start = async() =>{
//     //the async function here is useful when we first wait for the Promise above to be resolved.
//     try {
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first + '\n' + second);
//     } catch (error) {
//         console.log(error);
        
//     }

    
//  }

//  start()

// Don't re-enable this block of code for the start function above ; older example!!
// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err)=> console.log(err))