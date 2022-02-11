N,K = map(int,input().split());
types = [];
for _ in range(N):
    types.insert(0,int(input()));
res = 0;
for type in types:
    res += K//type;
    K %= type;
    if (K == 0):
        break;
print(res);