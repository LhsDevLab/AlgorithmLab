let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split("\r\n");
//let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let T = parseInt(input.shift());

function PriQ(){
    this.Queue = [];
    this.Add = (value)=>{
        let idx = this.Queue.length;
        this.Queue[idx] = value;
        while(idx > 0){
            let p = Math.floor((idx-1)/2);
            if (this.Queue[idx][1] < this.Queue[p][1])
                [this.Queue[idx], this.Queue[p]] = [this.Queue[p], this.Queue[idx]];
            idx = p;
        };
    }
    this.Get = ()=>{
        if (this.Queue.length == 0) return [null,null];
        let res = this.Queue[0];
        this.Queue[0] = this.Queue.pop();
        this.Queue = this.Queue[0] === undefined ? [] : this.Queue;
        let idx = 0;
        while(true){
            let [a,b] = [idx*2+1, idx*2+2];
            let [Va,Vb] = [a,b].map(e=>this.Queue[e] === undefined ? Infinity : this.Queue[e][1]);
            if (Va === Infinity && Vb === Infinity) break;
            let min = Va > Vb ? b : a;
            if (this.Queue[min][1] >= this.Queue[idx][1]) break;
            [this.Queue[min], this.Queue[idx]] = [this.Queue[idx], this.Queue[min]];
            idx = min;
        };
        return res;
    }
}

function func1(){
    const [N,K] = input.shift().split(' ').map(e=>parseInt(e));
    const buildTime = input.shift().split(' ').map(e=>parseInt(e));
    buildTime.unshift(0);
    let nextBuild = Array.from({length:N+1},()=>[]);
    let reqBuild = Array.from({length:N+1},()=>[]);
    for(let j=0; j<K; j++){
        let temp = input.shift().split(' ').map(e=>parseInt(e));;
        nextBuild[temp[0]].push(temp[1]);
        reqBuild[temp[1]].push(temp[0]);
    }
    let Goal = parseInt(input.shift());
    if (reqBuild[Goal].length == 0) return buildTime[Goal];
    let leafs = [];
    (()=>{
        let Used = Array.from({length:N+1},()=>false);
        Used[Goal] = true;
        let stack = [Goal];
        let can_leafs = [];
        while(stack.length !== 0){
            let temp = stack.pop();
            if (reqBuild[temp].length === 0){
                can_leafs.push(temp);
                continue;
            }
            reqBuild[temp].forEach(e=>{
                if (Used[e] === false){
                    stack.push(e);
                    Used[e] = true;
                }
            });
        }
        can_leafs.forEach((e)=>{
            if(Used[e] === true)
                leafs.push(e);
        })
        Used.forEach((e,idx)=>{
            if (e === false)
                buildTime[idx] = null;
        });
    })();
    let queue = new PriQ();
    let node = 0;
    let time = 0;
    leafs.forEach((e)=>{
        queue.Add([e,buildTime[e]+time]);
    });
    [node, time] = queue.Get();

    let count = 100;
    let res = null;
    while(node !== null && count-->0){
        let nexts = nextBuild[node];
        nexts.forEach(e=>{
            let req = reqBuild[e];
            let idx = req.indexOf(node);
            reqBuild[e] = req.slice(0,idx).concat(req.slice(idx+1));
        });
        nexts.forEach(e=>{
            if (res !== null) return;
            if (buildTime[e] !== null && reqBuild[e].length == 0){
                if (e == Goal) res = time+buildTime[e];
                queue.Add([e,buildTime[e]+time]);
            }
        });
        [node, time] = queue.Get();
    }
    return res;
}
let res = '';
for(let i=0; i<T; i++){
    res += func1()+'\n';
}
console.log(res.trim());