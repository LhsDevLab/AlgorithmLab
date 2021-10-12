const input = `2
4 4
10 1 100 10
1 2
1 3
2 4
3 4
4
8 8
10 20 1 5 8 7 1 43
1 2
1 3
2 4
2 5
3 6
5 7
6 7
7 8
7`.split('\n');

let Idx = 0;

function getInput(){
    return input[Idx++].split(' ').map(e=>parseInt(e));
}
let T = getInput()[0];

for(let i=0; i<T; i++){
    const [N,K] = getInput();
    const buildTime = getInput();
    let nextBuild = Array.from({length:N+1},()=>[]);
    let reqBuild = Array.from({length:N+1},()=>[]);
    for(let j=0; j<K; j++){
        let temp = getInput();
        nextBuild[temp[0]].push(temp[1]);
        reqBuild[temp[1]].push(temp[0]);
    }
    let Goal = getInput()[0];
    let leafs = [];
    (()=>{
        let Used = Array.from({length:N},()=>false);
        let stack = [Goal];
        while(stack.length !== 0){
            let temp = stack.pop();
            if (reqBuild[temp].length === 0){
                leafs.push(temp);
                continue;
            }
            reqBuild[temp].forEach(e=>{
                if (Used[e] === false){
                    stack.push(Used);
                    Used[e] = true;
                }
            });
        }
    })();
}
