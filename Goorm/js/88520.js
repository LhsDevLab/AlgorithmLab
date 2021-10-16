const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
    let Cases = [];
    let buf = [];
	let task = [(line)=>{
        let T = parseInt(line);
        for(let i=0; i<T; i++){
            task.push((line)=>{
                let [N,K] = line.split(' ').map(e=>parseInt(e));
                buf = [];
                for(let i = 0;i<N-1; i++){
                    task.push((line)=>{
                        buf.push(line.split(' ').map(e=>parseInt(e)));
                    });
                }
                task.push((line)=>{
                    buf.push(line.split(' ').map(e=>parseInt(e)));
                    Cases.push([N,K,buf]);
                });
            });
        }
    }];
	for await (const line of rl) {
        task.pop()(line);
        if (task.length == 0)
            rl.close();
	}
    Cases.forEach(([N,K,board])=>{
        const preSum = board.map(row=>{
            let res= [0];
            let sum = 0;
            row.forEach(e=>{
                sum += e;
                res.push(sum);
            });
            return res;
        });
        function Count(x,y){
            let res = 0;
            for(let i=x; i<x+K; i++)
                res += preSum[i][y+K]-preSum[i][y];
            return res;
        }
        let min = Infinity;
        for(let i=0; i<=N-K; i++){
            for(let j=0; j<=N-K; j++){
                let temp = Count(i,j);
                if (min > temp) min = temp;
            }
        }
        console.log(min);
    })
	process.exit();
})();
