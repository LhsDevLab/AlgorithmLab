function solution(id_list, report, k) {
    var answer = [];
    let reportCount = {};
    let mailCount = {};
    for (let id of id_list){
        reportCount[id] = [];
        mailCount[id] = 0;
    }
    report = Array.from(new Set(report)).map(e=>e.split(" "));
    for (let [user,target] of report)
        reportCount[target].push(user);
    for (let list of Object.values(reportCount)){
        if (list.length >= k)
            for (let user of list)
                mailCount[user] += 1;
    }
    for (let id of id_list)
        answer.push(mailCount[id]);
    return answer;
}

console.log(solution(
    ["muzi", "frodo", "apeach", "neo"],	
    ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],
    2));