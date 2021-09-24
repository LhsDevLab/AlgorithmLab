var fs = require('fs');
var input = "6 5 3 2 11 10 12 18 13 19 15 15 17 19".split(' ');//fs.readFileSync('/dev/stdin').toString().split(' ');
input = input.map(e=>{return parseInt(e)});

var n = input[0];
var m = input[1];

let lights = [[0,0]];
for(let i=1; i<=n; i++){
    lights[i] = [input[2+(i-1)*2], input[3+(i-1)*2]];
}


let prefix = [];
lights.reduce((a,c,idx)=>{
    if (idx == 1){
        prefix[1] = c[1];
        return c[1];
    }
    else{
        prefix[idx] = a+c[1];
        return prefix[idx];
    }
});
console.log(prefix);
let energe = {
    form:["cost","idx"]
};
for(let i=1; i<=n; i++){
    if (i == m){    
        energe[[i,i,1]] = [0,0];
        energe[[i,i,2]] = [0,0];
    }
    else{
        energe[[i,i,1]] = [Infinity,0];
        energe[[i,i,2]] = [Infinity,0];

    }
}

while(){
}
