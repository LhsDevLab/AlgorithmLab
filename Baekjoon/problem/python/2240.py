import sys

T, W = map(int,sys.stdin.readline().split(' '))
maxAtMove = [[0,0] for _ in range(W+1)]
maxAtMove[0] = [0,1]
if W != 0:
    maxAtMove[1] = [0,2]
for _ in range(T):
    pos = int(sys.stdin.readline())
    if pos == 1:
        maxAtMove[0][0] += 1
    for i in range(1, W+1):
        if maxAtMove[i][1] == pos :
            maxAtMove[i][0] += 1
        else:
            if maxAtMove[i-1][1] != pos and maxAtMove[i-1][0]+1 > maxAtMove[i][0] : 
                maxAtMove[i] = [maxAtMove[i-1][0]+1, pos]
            elif maxAtMove[i][1] == 0 or maxAtMove[i][0] < maxAtMove[i-1][0]:
                maxAtMove[i] = maxAtMove[i-1][:]
print(maxAtMove[W][0])