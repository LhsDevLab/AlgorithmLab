N,K = map(int, input().split());
arr = [];
dp = [0 for _ in range(K+1)];
for _ in range(N):
    arr.append(tuple(map(int,input().split())));
for W,V in arr:
    next = [dp[i] for i in range(K+1)];
    for i in range(0,K-W+1):
        if dp[i+W] < dp[i] + V:
            next[i+W] = dp[i] + V;
    dp = next;
print(dp[K]);