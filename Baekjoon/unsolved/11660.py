import sys

N,M = map(int,sys.stdin.readline().split(' '))
preSumList = [[] for _ in range(N)]

for i in range(N):
    total = 0
    preSumList[i].append(0)
    for item in map(int,sys.stdin.readline().split(' ')):
        total += item
        preSumList[i].append(total)

for _ in range(M):
    total = 0
    ay,ax,by,bx = map(int,sys.stdin.readline().split(' '))
    for i in range(ay-1, by):
        total += preSumList[i][bx]-preSumList[i][ax-1]
    print(total)