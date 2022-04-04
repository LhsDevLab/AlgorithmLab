const reader = {
    input : require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index : 0,
    readLine : function(){
        return this.input[this.index++];
    },
    readList : function(delimiter){
        delimiter = delimiter == undefined ? " " : delimiter;
        return this.readLine().split(delimiter).map(e=>parseInt(e));
    }
}
function findTarget(arr, target){
    let [start,end] = [0,arr.length];
    while (start < end){
        let mid = parseInt((start+end)/2);
        if (target == arr[mid])
            return mid;
        else if (arr[mid] < target)
            start = mid+1;
        else
            end = mid;
    }
    return end;
}
let [N,K] = reader.readList();
const Items = [];
const Bags = [];
for (; N>0;N--){
    let [w,v] = reader.readList();
    Items.push([w,v,v/w]);
}
for (;K>0;K--)
    Bags.push(parseInt(reader.readLine()));
Items.sort((a,b)=>b[2]-a[2]);
Bags.sort((a,b)=>a-b);
let answer = 0;
for (let item of Items){
    let idx = findTarget(Bags, item[0]);
    if (Bags[idx] !== undefined)
        answer += item[1];
    Bags.splice(idx,1);
    if (Bags.length == 0)
        break;
}
console.log(answer);