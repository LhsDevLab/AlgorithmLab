import sys

N,M = map(int,sys.stdin.readline().split(' '))
preSumList = [[0 for _ in range(N+1)] for _ in range(N+1)]

for i in range(1,N+1):
    input = tuple(map(int,sys.stdin.readline().split(' ')))
    for j in range(1,N+1):
        preSumList[i][j] = preSumList[i-1][j]+preSumList[i][j-1]-preSumList[i-1][j-1]+input[j-1]
res = ""
for _ in range(M):
    ay,ax,by,bx = map(int,sys.stdin.readline().split(' '))
    res += str(preSumList[by][bx] - preSumList[ay-1][bx] - preSumList[by][ax-1] + preSumList[ay-1][ax-1])+'\n'
print(res,end='')