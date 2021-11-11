import sys
P = int(sys.stdin.readline())
N = int(sys.stdin.readline())
xCount = [1,0,1]
length = [1,2,2]
for i in range(3, N):
    xCount.append(xCount[i-2]+xCount[i-3])
    length.append(length[i-1]+xCount[i-1])
    
def sol2(N,K):
    lvl = 1
    while N-lvl>3:
        front = length[N-lvl-3]
        if K <= front:
            lvl += 3
        else:
            lvl += 2
            K -= front
    temp = "X"
    for _ in range(N-lvl):
        temp = temp.replace("X","yz").replace("Y","z").replace("Z","x").upper()
    return temp[K-1]
def sol3(N,K):
    if K == "Y":
        if N == 1:
            return 0;
        return xCount[N-2]
    elif K == "Z":
        if N == 1:
            return 0;
        elif N == 2:
            return 1;
        return xCount[N-2]+xCount[N-3]
    else:
        return xCount[N-1]

if P == 1:
    print(length[N-1])
elif P == 2:
    print(sol2(N, int(sys.stdin.readline())))
else :
    print(sol3(N, sys.stdin.readline().strip()))