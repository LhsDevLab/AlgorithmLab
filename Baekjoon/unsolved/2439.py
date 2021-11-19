import sys
N = int(sys.stdin.readline())
space = ' '*(N)
star = ''
for _ in range(N):
    space = space[:-1]
    star = star+'*'
    print(space+star)
    