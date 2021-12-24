M,N,H = map(int, input().split());
boards = [];
for _ in range(H):
    board = [];
    for _ in range(N):
        board.append(list(map(int,input().split())));
    boards.append(board);
    
def isValid(lay, row, col):
    global boards;
    try:
        if row >= 0 and col >= 0 and lay >= 0 and boards[lay][row][col] == 0:
            return True;
    except:
        return False;
    return False;

stack = [];
remain = 0;
for lay in range(H):
    for row in range(N):
        for col in range(M):
            if boards[lay][row][col] == 1:
                stack.append((lay,row,col));
            elif boards[lay][row][col] == 0:
                remain += 1;
answer = 0;
while remain != 0:
    if len(stack) == 0:
        answer = -1;
        break;
    next = [];
    for lay,row,col in stack:
        arr = [(lay+1,row,col),(lay-1,row,col),
               (lay,row+1,col),(lay,row-1,col),
               (lay,row,col+1),(lay,row,col-1),];
        for l,r,c in arr:
            if isValid(l,r,c):
                next.append((l,r,c));
                boards[l][r][c]= 1;
                remain -= 1;
    stack = next;
    answer += 1;
    
print(answer);