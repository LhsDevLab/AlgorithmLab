import sys;
T = int(sys.stdin.readline());
def solution(n):
    above, under = list(map(int, sys.stdin.readline().split())),list(map(int, sys.stdin.readline().split()));
    dp = [0,0];
    for i in range(n):
        a,u = above[i],under[i];
        m = max(dp);
        x = max(m,dp[1]+a);
        y = max(m,dp[0]+u);
        dp = [x,y]
    return max(dp);
for _ in range(T):
    print(solution(int(sys.stdin.readline())));