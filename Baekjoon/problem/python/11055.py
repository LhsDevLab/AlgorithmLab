import sys
N = int(sys.stdin.readline())
arr = list(map(int,sys.stdin.readline().split(' ')))
dp = [0 for _ in range(N)]

def func(i):
    v = arr[i]
    res = 0
    while i != -1:
        if v > arr[i] and res < dp[i]:
            res = dp[i]
        i -= 1
    return res
for i in range(N):
    res = func(i)
    dp[i] = arr[i]
    if res != -1:
        dp[i] += res
print(max(dp))