import sys

N = int(sys.stdin.readline())

def Nqueen(pos, N):
    if len(pos) == N:
        return 1
    res = 0
    for e in filter(lambda e : e not in pos,range(N)):
        height = len(pos)
        isCorrect = True
        for i in range(len(pos)):
            if pos[i] == e-(height-i) or pos[i] == e+(height-i):
                isCorrect = False
                break;
        if isCorrect:
            res += Nqueen(pos+[e],N)
    return res

for i in range(15):
    print(Nqueen([],i))