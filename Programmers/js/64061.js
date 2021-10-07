function solution(board, moves) {
    var answer = 0;
    let Pipes = Array.from({length:board.length},()=>[]);
    let exit = [];
    
    for(let i=0; i<board.length; i++){
        board.forEach(e=>{
            if (e[i] != 0){
                Pipes[i].push(e[i]);
            };
        });
    }
    
    moves.forEach(mv=>{
        let type = Pipes[mv-1].shift();
        if (type != undefined){
            if (exit[0] == type){
                exit.shift();
                answer += 2;
            }
            else{
                exit.unshift(type);
            }
        }
    });
    
    return answer;
}