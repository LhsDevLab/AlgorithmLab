let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

while(true){
    let temp = input.shift();
    if (temp == '0') break;
    console.log(((e)=>{
        for(let i=0; i<(e.length-1)/2; i++){
            if (e.charAt(i) != e.charAt(e.length-1-i))
                return false;
        }
        return true;
    })(temp) ? 'yes' : 'no');
}