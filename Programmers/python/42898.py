def solution(m, n, puddles):
    board = [[0 for _ in range(m)] for _ in range(n)];
    board[0][0] = 1;
    for c,r in puddles:
        board[r-1][c-1] = None;
    for r in range(n):
        for c in range(m):
            if board[r][c] == None:
                continue;
            a = board[r-1][c] if r>0 and board[r-1][c] != None else 0;
            b = board[r][c-1] if c>0 and board[r][c-1] != None else 0;
            board[r][c] += (a+b);
    return board[n-1][m-1]%1000000007;

print(solution(4,3,[[1,2],[2,2]]));
