def power(base,expo):
    res = 1;
    stack = [];
    while expo != 1:
        if expo%2 == 0:
            stack.append(2);
            expo /= 2;
        else:
            stack.append(1);
            expo -= 1;
    for e in stack[::-1]:
        res *= base if e == 1 else res;
    return res;