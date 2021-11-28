let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

const [N,F] = input[0].split(' ').map(e=>{return parseInt(e)});

function getCoeffi(N){
    function addArr(a,b){
        let res = [];
        for(let i=0; i<a.length; i++){
            res[i] = a[i]+b[i];
        }
        return res;
    }
    let res = Array.from({length:N},()=>Array.from({length:N},()=>0));
    for(let i=0; i<N; i++)
        res[i][i] = 1;
    while(res.length > 1){
        let newArr = [];
        for(let i=0; i<res.length-1; i++){
            newArr.push(addArr(res[i],res[i+1]));
        };
        res = newArr;
    }
    return res[0];
};
const coeffi = getCoeffi(N);
function getValue(arr){
    return arr.reduce((a,c,idx)=>{
        return a+c*coeffi[idx];
    });
}
let stopper = false;
let res = null;
function combination(arr, remain){
    function deleteValue(target,idx){ 
        return target.slice(0,idx).concat(target.slice(idx+1));
    }
    if (stopper == true) return;
    if (arr.length == N){
        if (getValue(arr) == F){
            res = arr;
            stopper = true;
        }
        return;
    }

    for(let i=0; i<remain.length; i++){
        combination(arr.concat(remain[i]),deleteValue(remain, i));
    };
}
combination([],Array.from({length:N},(_,x)=>x+1));

console.log(res.join(' '));