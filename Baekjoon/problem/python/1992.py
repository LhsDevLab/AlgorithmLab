import math
N = int(input())
board = []
for _ in range(N):
    board.append(input().strip())
def process(n):
    res = []
    for i in range(0,n,2):
        temp = []
        for j in range(0,n,2):
            a,b,c,d = (board[i][j],board[i][j+1],board[i+1][j],board[i+1][j+1])
            if a==b==c==d and (a == '1' or a == '0'):
                temp.append(a)
            else:
                temp.append([a,b,c,d])
        res.append(temp)
    return res
for i in range(int(math.log2(N))):
    board = process(int(N/(2**i)))
    
def toString(L):
    if len(L) == 1:
        if L[0] != '0' and L[0] != '1':
            return toString(L[0])
        else:
            return L[0]
    res = ''
    for e in L:
        if e != '0' and e != '1':
            res += toString(e)
        else:
            res += e
    return '('+res+')'
print(toString(board))