N,B = map(int, input().split());
mtrx = [list(map(int, input().split())) for _ in range(N)];
def mul(a,b):
    global N;
    res = [[0]*N for _ in range(N)];
    for i in range(N):
        for j in range(N):
            for k in range(N):
                res[j][i] += a[k][i]*b[j][k];
    for e in res:
        for i in range(N):
            e[i] %= 1000;
    return res;
res = [[e for e in row] for row in mtrx];
stack = [];
while B != 1:
    if B%2 == 0:
        stack.append(2);
        B /= 2;
    else:
        stack.append(1);
        B -= 1;
for e in stack[::-1]:
    if e == 1:
        res = mul(res,mtrx);
    elif e == 2:
        res = mul(res,res);
for e in res:
    print(' '.join(map(lambda e: str(e%1000),e)));