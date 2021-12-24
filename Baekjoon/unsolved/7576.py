M,N = map(int,input().split());
board = [];
for _ in range(N):
    board.append(list(map(int,input().split())));

def isValid(row, col):
    global board;
    try:
        if row >= 0 and col >= 0 and board[row][col] == 0:
            return True;
    except:
        return False;
    return False;

stack = [];
remain = 0;
for i in range(N):
    for j in range(M):
        if board[i][j] == 1:
            stack.append((i,j));
        elif board[i][j] == 0:
            remain += 1;
answer = 0;
while remain != 0:
    if len(stack) == 0:
        answer = -1;
        break;
    next = [];
    for i,j in stack:
        arr = [(i+1,j),(i-1,j),(i,j+1),(i,j-1)];
        for i,j in arr:
            if isValid(i,j):
                next.append((i,j));
                board[i][j] = 1;
                remain -= 1;
    stack = next;
    answer += 1;
    
print(answer);