const reader = {
    input: require('fs').readFileSync('input.txt').toString().split("\r\n"),
    // input : require('fs').readFileSync('/dev/stdin').toString().split("\n"),
    index: 0,
    readLine: function () {
        return this.input[this.index++];
    },
    readList: function () {
        return this.readLine().split(" ").map(e => parseInt(e));
    }
}

const N = reader.readList()[0];
const [a,b,c,d,e,f] = reader.readList();
const mini = [Math.min(
    a,b,c,d,e,f
),Math.min(
    a+b,
    a+c,
    a+e,
    a+d,
    b+c,
    b+d,
    b+f,
    c+e,
    c+f,
    e+d,
    e+f,
    d+f
),Math.min(
    a+b+c,
    a+b+d,
    a+c+e,
    a+e+d,
    b+c+f,
    b+d+f,
    c+e+f,
    e+d+f
)];
console.log(mini[0]*(N-2)*(5*N-6) + mini[1]*(2*N-3)*4 + mini[2]*4);