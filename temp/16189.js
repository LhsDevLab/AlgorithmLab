let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\r\n");
let str = input[0];

function checkSymmetric(str){
    for(let i=0; i<str.length/2; i++){
        if (str.charAt(i) != str.charAt(str.length-1-i))
            return false;
    }
    return true;
}
let isSym = checkSymmetric(str);

if (isSym === false){
    console.log("NO");
}
else{
    console.log("YES");
}
