n,k = map(int,input().split());
T = [];
DP = [k+1 for _ in range(k+1)];
for _ in range(n):
    T.append(int(input()));
for t in T:
    for i in range(1,k+1):
        if i%t == 0:
            DP[i] = (i//t);
        DP[i] = min(DP[i],(i // t) + DP[i % t]);
print(-1 if DP[k] == k+1 else DP[k]);