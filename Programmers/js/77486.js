function solution(enroll, referral, seller, amount) {
    var answer = [];

    let master = [];
    for(let i=0; i<enroll.length;i++){
        master[i] = enroll.indexOf(referral[i]);
        answer[i] = 0;
    }

    for(let i=0; i<seller.length; i++){
        let target = enroll.indexOf(seller[i]);
        let earn = amount[i]*100;

        while(target != -1){
            let tax = earn/10;
            if (tax < 1){
                answer[target] += earn;
                break;
            }
            else{
                tax = Math.floor(tax);
                answer[target] += earn-tax;
                target = master[target];
                earn = tax;
            }
        }
    }

    return answer;
}
console.log(solution(["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"], ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"], ["young", "john", "tod", "emily", "mary"], [12, 4, 2, 5, 10]));