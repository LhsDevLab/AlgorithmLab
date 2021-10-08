function solution(w, h) {
    if (w>h) [w,h] = [h,w];
    let answer = w*h;
    const Euclidean = ((a,b)=>{
        while(true){
            let res = a%b;
            if (res == 0)
                return b;
            [a,b] = [b,res];
        };
    })(h,w);
    const frac = [h/Euclidean , w/Euclidean];

    let start= 0;
    let end= frac[0];
    let loss = 0;
    for(let i=0; i<w/Euclidean; i++){
        loss += Math.ceil(end/frac[1])-Math.floor(start/frac[1]);
        [start,end] = [end, end+frac[0]]
    }

    return answer-loss*Euclidean;
}
console.log(solution(8,12));