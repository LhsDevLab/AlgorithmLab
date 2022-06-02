N = int(input());
res = 0;
while N != 0:
    num = 1;
    while N >= num:
        res += 1;
        N -= num;
        num += 1;
    if N == 0:
        break;
print(res);