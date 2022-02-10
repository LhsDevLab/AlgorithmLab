def solution(maps):
    n,m = len(maps),len(maps[0]);
    answer = 0;
    next = set([(0,0)]);
    while len(next) != 0:
        temp = set();
        for r,c in next:
            if r == n-1 and c == m-1:
                return answer+1;
            maps[r][c] = 0;
            for a,b in ((r+1,c),(r-1,c),(r,c+1),(r,c-1)):
                try:
                    if a >= 0 and b >= 0 and maps[a][b] == 1:
                        temp.add((a,b));
                except:
                    pass;
        answer += 1;
        next = temp;
    return -1;

print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));
print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]));
print(solution([[1,1]]));