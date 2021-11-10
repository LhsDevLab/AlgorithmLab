import sys

N,M = map(int,sys.stdin.readline().split(' '))
preSumList = [[] for _ in range(N)]
preSum2Arr = [[0 for _ in range(N+1)] for _ in range(N+1)]
for i in range(N):
    total = 0
    preSumList[i].append(0)
    for item in map(int,sys.stdin.readline().split(' ')):
        total += item
        preSumList[i].append(total)

for i in range(1,N+1):
    for j in range(N+1):
        preSum2Arr[i][j] = preSum2Arr[i-1][j] + preSumList[i-1][j]

for _ in range(M):
    ay,ax,by,bx = map(int,sys.stdin.readline().split(' '))
    print(preSum2Arr[by][bx] - preSum2Arr[ay-1][bx] - preSum2Arr[by][ax-1] + preSum2Arr[ay-1][ax-1])