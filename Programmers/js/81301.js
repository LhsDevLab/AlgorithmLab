function solution(s) {
    var answer = "";
    const compareTable = {
        z : [0,4],
        o : [1,3],
        t :{
            w: [2,2],
            h: [3,4]
        },
        f :{
            o: [4,3],
            i: [5,3]
        },
        s :{
            i: [6,2],
            e: [7,4]
        },
        e : [8,5],
        n : [9,4],
    }
    let current = compareTable;
    let idx = 0;
    
    try{
    while(idx<s.length){
        let c = s.charAt(idx);
        if (isNaN(c) == true){
            c = current[c];
            if (Array.isArray(c) == true){
                answer += c[0];
                idx += c[1];
                current = compareTable;
            } 
            else{
                current = c;
                idx += 1;
            }
        }
        else{
            answer += c;
            idx += 1;
        }
    };   
    }catch(e){}
    
    return parseInt(answer);
}