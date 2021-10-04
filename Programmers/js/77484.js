function solution(lottos, win_nums) {
    let count = 0;

    win_nums.sort((a,b)=>{return b-a});
    lottos.sort((a,b)=>{return b-a});

    win_nums.forEach(e=>{
        while(true){
            let item = lottos.shift();
            if (item == 0 || item == undefined){
                lottos.unshift(0);
                break; 
            }
            if (item == e){
                count += 1;
                break;
            }
            else if (item < e){
                lottos.unshift(item);
                break;
            }
            else
                continue;
        }
    });
    let zero = 0;
    lottos.forEach(e=>{if(e==0) zero += 1});

    function getTier(n){
        if (n < 2) return 6;
        return 7-n;
    }

    return [getTier(count+zero), getTier(count)];
}

// console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
//console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]));