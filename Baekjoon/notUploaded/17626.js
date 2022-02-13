let fs = require('fs');
let n = parseInt(fs.readFileSync('input.txt'));
let DP = [[],new Set(),new Set()];
let funcSet = [
    function(){
        if (parseInt(Math.sqrt(n))**2 == n)
            return true;
        for (let i=1 ;i<=Math.sqrt(n); i++)
            DP[0].push(i**2);
        return false;
    },
    function(){
        for (let i=0; i<DP[0].length; i++){
            for (let j=i; j<DP[0].length; j++)
                DP[1].add(DP[0][i]+DP[0][j]);
        }
        return DP[1].has(n) ? true : false;
    },
    function(){
        for (let a of DP[0]){
            for (let b of DP[1])
                DP[2].add(a+b);
        }
        return DP[2].has(n) ? true : false;
    },
    ()=>true
];
for (let i in funcSet){
    if (funcSet[i]()){
        console.log(parseInt(i)+1);
        break;
    }
}