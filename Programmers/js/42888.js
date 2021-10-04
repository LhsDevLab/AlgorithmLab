function solution(record) {
    var answer = [];
    let userInfo = {};
    let logs = [];

    record.forEach(str=>{
        let [opr,uid,name] = str.split(' ');
        if (name != undefined)
            userInfo[uid] = name;
        logs.push([opr,uid]);
    });

    logs.forEach(log=>{
        switch(log[0]){
            case('Enter'):
                answer.push(`${userInfo[log[1]]}님이 들어왔습니다.`);
            break;
            case('Leave'):
                answer.push(`${userInfo[log[1]]}님이 나갔습니다.`);
            break;
        }
    })

    return answer;
}
console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));