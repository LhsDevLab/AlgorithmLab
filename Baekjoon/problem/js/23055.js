let fs = require('fs');

let n = parseInt(fs.readFileSync('input.txt').toString());
//fs.readFileSync('/dev/stdin').toString();

let graphic = [];

for(let i=0; i<n; i++){
    let arr = [];
    for(let j=0; j<n; j++) arr[j] = " ";
    graphic[i] = arr;
}

function draw(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i].join(""));
    }
}

for(let i =0; i<n; i++){
    graphic[i][i] = "*";
    graphic[i][n-i-1] = "*";
    graphic[i][0] = "*";
    graphic[0][i] = "*";
    graphic[i][n-1] = "*";
    graphic[n-1][i] = "*";
}

draw(graphic);