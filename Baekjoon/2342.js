let commands = require('fs').readFileSync('input.txt').toString().split(" ").map(e => parseInt(e));
commands.pop();
const opposite = [0, 3, 4, 1, 2];
console.log(commands);
//스텝하면서 남은 발 옮겨도 됨, 근데 그럴 필요가 없구나