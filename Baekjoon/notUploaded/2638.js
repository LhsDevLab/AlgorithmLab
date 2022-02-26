const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    read : function(){
        return this.input.shift().split(" ").map(e=>parseInt(e));
    }
}
let [N,M] = reader.read();
let cheese = [];
for (let i=0; i<N; i++)
    cheese.push(reader.read());
let touched = Array.from({length:N}, ()=>Array.from({length:M}, ()=>0));
let melten = [];
function spread(r,c, nextMelt){
    let queue = [[r,c]];
    while(queue.length != 0){
        let [R,C] = queue.shift();
        for (let [r,c] of [[R+1,C],[R-1,C],[R,C+1],[R,C-1]]){
            try{
                if (cheese[r][c] == 1){
                    touched[r][c] += 1;
                    if (touched[r][c] == 2)
                        nextMelt.push([r,c]);
                }
                else if (cheese[r][c] == 0 && touched[r][c] == 0){
                    touched[r][c] = 1;
                    queue.push([r,c]);
                }
            }catch{}
        }
    }
}
spread(0,0,melten);
for (let i=1;; i++){
    let next = [];
    for (let [r,c] of melten)
        cheese[r][c] = 0;
    for (let [r,c] of melten)
        spread(r,c,next);
    if (next.length == 0){
        console.log(i);
        break;
    }
    melten = next;
}