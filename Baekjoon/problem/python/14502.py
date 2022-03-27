from itertools import combinations;
answer = 0;
N,M = map(int, input().split());
lab = [];
pos = [
        [],
        [],
        []
    ];
for _ in range(N):
    lab.append(list(map(int, input().split())));
    
for r in range(N):
    for c in range(M):
        pos[lab[r][c]].append((r,c));
        
def fill(a,b,c,value):
    lab[a[0]][a[1]] = value;
    lab[b[0]][b[1]] = value;
    lab[c[0]][c[1]] = value;
    
def dfs(r,c,visited):
    res = 0;
    def check(r,c):
        if (r >= 0 and r < N and c >= 0 and c < M) and (lab[r][c] == 0 and ((r,c) not in visited)):
            return True;
        return False;
    stack = [(r,c)];
    while len(stack) != 0:
        a,b = stack.pop();
        for i,j in [(a+1,b),(a-1,b),(a,b+1),(a,b-1)]:
            if (check(i,j)):
                res += 1;
                visited.add((i,j));
                stack.append((i,j));
    return res;

for A,B,C in combinations(pos[0],3):
    fill(A,B,C,1);
    temp = 0;
    visited = set();
    for r,c in pos[2]:
        temp += dfs(r,c,visited);
    answer = max(answer, len(pos[0])-temp-3);
    fill(A,B,C,0);
print(answer);