N = int(input());
board = [input() for _ in range(N)];
points = set();
counts = [];

for r in range(N):
    for c in range(N):
        if board[r][c] == "1":
            points.add((r,c));

def getCluster(start,points):
    stack = [start];
    res = 0;
    while len(stack) != 0:
        r,c = stack.pop();
        childs = [(r+1,c),(r-1,c),(r,c+1),(r,c-1)];
        for c in childs:
            if c in points:
                stack.append(c);
                points.remove(c);
        res += 1;
    return res;

while len(points)!=0 :
    counts.append(getCluster(points.pop(),points));
counts.sort();
print(len(counts));
for e in counts:
    print(e);