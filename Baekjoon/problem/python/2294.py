n,k = map(int,input().split());
T = set();
DP = [k+1 for _ in range(k+1)];
DP[0] = 0;
for _ in range(n):
    T.add(int(input()));
for i in range(1,k+1):
    for t in T:
        DP[i] = min(DP[i], 1 + DP[(i - t) if t <= i else i]);
print(-1 if DP[k] >= k+1 else DP[k]);