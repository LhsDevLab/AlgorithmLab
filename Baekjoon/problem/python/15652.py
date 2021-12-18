N,M = map(int, input().split());
arr = [[i] for i in range(1,N+1)];
for _ in range(1,M):
    newArr = [];
    for e in arr:
        for n in range(e[-1],N+1):
            newArr.append(e+[n]);
    arr = newArr;
for e in arr:
    print(' '.join(map(str,e)));