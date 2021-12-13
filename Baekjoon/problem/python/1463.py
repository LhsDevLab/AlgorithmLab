N = int(input())
dp = [0 for _ in range(N+1)]
for i in range(2,N+1):
    mem = [dp[i-1]+1]
    if i%2 == 0: mem.append(dp[int(i/2)]+1)
    if i%3 == 0: mem.append(dp[int(i/3)]+1)
    dp[i] = min(mem)
print(dp[N])