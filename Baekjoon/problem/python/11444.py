#f(a+b) = f(a)*f(b-1)+f(a+1)*f(b)
n = int(input());
mtrx = [[1,1],[1,0]];
def mul(a,b):
    N = 2;
    res = [[0]*N for _ in range(N)];
    for i in range(N):
        for j in range(N):
            for k in range(N):
                res[j][i] += a[k][i]*b[j][k];
    for e in res:
        for i in range(N):
            e[i] %= 1000000007;
    return res;
res = [[1,0],[0,1]];
stack = [];
while n != 0:
    if n%2 == 0:
        stack.append(2);
        n //= 2;
    else:
        stack.append(1);
        n -= 1;
for e in stack[::-1]:
    if e == 1:
        res = mul(res,mtrx);
    elif e == 2:
        res = mul(res,res);
print(res[0][1]%1000000007);