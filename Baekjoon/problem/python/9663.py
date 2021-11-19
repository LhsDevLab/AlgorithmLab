import sys

N = int(sys.stdin.readline())
res = 0
pos = [-1 for _ in range(N)]

def isValid(e):
    for i in range(e):
        if pos[i] == pos[e] or abs(pos[i]-pos[e]) == e-i:
            return False
    return True;
def Nqueen(level):
    global res;
    if level == N:
        res += 1;
        return
    for e in range(N):
        pos[level] = e
        if (isValid(level)):
            Nqueen(level+1)
            
Nqueen(0)
print(res)