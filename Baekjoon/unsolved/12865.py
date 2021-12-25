N,K = map(int,input().split());
arr = [];
for _ in range(N):
    arr.append(tuple(map(int,input().split())));
arr.sort(key=lambda e : e[1]/e[0],reverse = True);
for e in arr:
    print(e);