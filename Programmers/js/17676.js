function solution(lines) {
    var answer = 0;
    let logs = [];
    
    let id = 0;
    for(let i=0; i<lines.length; i++){
        let [date, time, length] = lines[i].split(' ');
        let end = new Date(date+' '+time).getTime();
        length = parseFloat(length)*1000;
        
        logs.push([id,end-length+1, 1]);
        logs.push([id,end+1000,-1]);
        id += 1;
    }
    logs.sort((a,b)=>{
        if (a[1] == b[1]){
            return a[2] == 1 ? false : true;
        }
        return a[1]-b[1];
    });
    console.log(logs);
    const onWorking = new Set();
    
    logs.forEach(log=>{
        switch(log[2]){
            case(1):
                onWorking.add(log[0]);
                if (onWorking.size > answer)
                    answer = onWorking.size;
                break;
            case(-1):
                onWorking.delete(log[0]);
                break;
        } 
    });
    return answer;
}