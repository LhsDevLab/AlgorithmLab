function solution(grid) {
    let answer = [];
    let [h,w] = [grid.length, grid[0].length];
    let dirList = [[1,0],[0,-1],[-1,0],[0,1]];
    let visited = {};
    let cycles = [];
    function getTravel(r,c,dir){
        let cluster = new Set();
        let turn = {
            R : ()=>{dir = (dir+5)%4},
            L : ()=>{dir = (dir+3)%4},
            S : ()=>{}
        }
        function mv(key){
            console.log(key);
            cluster.add(key);
            let [a,b] = dirList[dir];
            r = (r+a+h)%h;
            c = (c+b+w)%w;
            turn[grid[r][c]]();
        }
        mv([r,c,dir].toString());
        while (true){
            let key = [r,c,dir].toString();
            if (visited[key] == true)
                return;
            else if (cluster.has(key)){
                cluster = Array.from(cluster);
                cluster = cluster.slice(cluster.indexOf(key));
                cycles.push(new Set(cluster));
                return;
            }
            visited[key] = true;
            mv(key);
        }
    }
    for (let dir=0; dir<4; dir++){
        for (let r =0; r<h; r++)
            for (let c=0; c<w; c++)
                if (!visited[r,c,dir.toString()])
                    getTravel(r,c,dir);
    }
    answer = cycles.map(e=>e.size);
    answer.sort();
    return answer;
}
console.log(solution(["RL","LR"]));