//let [a,b,c,d] = [1,2,3,4]
let a = 1
let b = 2 // 여기서 세미콜론 제외시 b가 초기화가 안됨, 선언문에선 ;가 필순가 ?
[b] = [3,4]
console.log(a)
console.log(b)