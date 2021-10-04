function solution(rows, columns, queries) {
    var answer = [];
    const board = [];
    board[0] = [];
    for(let i=1; i<=columns; i++)
        board[0][i-1] = i;

    console.log();
    for(let i=1; i<rows; i++){
        board[i] = board[i-1].map(e=>{return e+columns});
    }

    function rotate(a,b){
        let min = Infinity;
        let string = [];
        function doEach(callback){
            for(let i=a[1]; i<=b[1]; i++)
                callback([a[0],i]);
            for(let i=a[0]+1; i<=b[0]; i++)
                callback([i,b[1]]);
            for(let i=b[1]-1; i>=a[1]; i--)
                callback([b[0],i]);
            for(let i=b[0]-1; i>a[0]; i--)
                callback([i,a[1]]);
        }
        doEach(([y,x])=>{
            let num = board[y][x];
            if (num < min) min = num;
            string.push(num);
        });
        string.unshift(string.pop());
        doEach(([y,x])=>{
            board[y][x] = string.shift();
        });
        return min;
    }
    queries.forEach(([a,b,c,d])=>{
        answer.push(rotate([a-1,b-1],[c-1,d-1]));
    });
    return answer;
}

console.log(solution(	6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]));
console.log(solution(	3, 3, [[1, 1, 2, 2], [1, 2, 2, 3], [2, 1, 3, 2], [2, 2, 3, 3]]));
console.log(solution(	100, 97, [[1, 1, 100, 97]]));