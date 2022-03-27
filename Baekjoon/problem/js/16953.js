const reader = {
    input : require('fs').readFileSync('input.txt').toString(),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    readList : function(){
        return this.input.split(" ").map(e=>parseInt(e));
    }
}
let [N,M] = reader.readList();
for (let count = 0; ; count++){
    if (N >= M){
        console.log(N == M ? count+1 : -1);
        break;
    }
    M = M%2 == 0 ? M/2 : (M-1)/10;
}