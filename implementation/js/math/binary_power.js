function binary_power(base, exponent){
    let res = 1;
    stack = [];
    while (exponent != 0){
        if (exponent%2 == 0){
            stack.push(2);
            exponent /= 2;
        } else{
            stack.push(1);
            exponent -= 1;
        }
    }
    for (let i=stack.length-1; i>=0; i--){
        res *= stack[i] == 1 ? base : res;
    }
    return res;
}