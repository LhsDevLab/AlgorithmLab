let fs = require('fs');
try{
    let file = 'output.txt';
    let str = "0000000000".repeat(100);
    for (let i=0; i<1000; i++)
        fs.appendFileSync(file, str)
}catch(e){};