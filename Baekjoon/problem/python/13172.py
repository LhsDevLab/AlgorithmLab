import sys, math;
M = int(sys.stdin.readline());
MOD = 1000000007;
res = 0;
def power(base,expo):
    res = 1;
    stack = [];
    while expo != 0:
        if expo%2 == 0:
            stack.append(2);
            expo /= 2;
        else:
            stack.append(1);
            expo -= 1;
    for e in stack[::-1]:
        res = (res*base)%MOD if e == 1 else (res*res)%MOD;
    return res;
for _ in range(M):
    side, sum = map(int, sys.stdin.readline().split());
    gcd = math.gcd(side, sum);
    sum //= gcd;
    side //= gcd;
    res += sum if side == 1 else (power(side, MOD-2)*sum) % MOD;
print(res);