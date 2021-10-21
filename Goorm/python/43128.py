import sys

L = int(sys.stdin.readline())
Start = list(map(int,sys.stdin.readline().split(' ')))
Goal = list(map(int,sys.stdin.readline().split(' ')))
board = [[False for _ in range(L)] for _ in range(L)]
# board = list(map(lambda e : list(map(lambda e: 0, range(L))), range(L)))

def func(x,y):
    if not (x < 0 or y < 0 or x >= L or y >= L):
        if (board[x][y] == False):
            board[x][y] = num
            stack.append([x,y])

newTask = [Start]
num = 0;

while len(newTask)>0:
    stack = [];
    for [x,y] in newTask:
        if [x,y] == Goal:
            print(num)
            break;
        func(x-2,y-1); func(x-2,y+1); func(x+2,y-1); func(x+2,y+1);
        func(x-1,y-2); func(x-1,y+2); func(x+1,y-2); func(x+1,y+2);
    newTask = stack;
    num += 1;

