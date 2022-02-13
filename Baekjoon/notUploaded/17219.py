import sys;

N,M = map(int, sys.stdin.readline().split());
memo = {};
for _ in range(N):
    site, pw = sys.stdin.readline().split();
    memo[site] = pw;
for _ in range(M):
    print(memo[sys.stdin.readline().strip()]);