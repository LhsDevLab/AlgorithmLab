N = int(input())
arr = list(map(int, input().split()))
dp = [1]

for i in range(1,N):
    m = 0
    for j in range(i):
        if arr[j] < arr[i] and dp[j] > m:
            m = dp[j]
    dp.append(m+1)

print(max(dp))