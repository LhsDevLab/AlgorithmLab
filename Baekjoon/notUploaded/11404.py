import sys;

def F_W(edges):
    N = len(edges);
    for _ in range(N-1):
        isDirty = False;
        for node in range(1,N):
            for i in range(1,N):
                for j in range(1,N):
                    if edges[i][j] > edges[i][node] + edges[node][j]:
                        edges[i][j] = edges[i][node] + edges[node][j]
                        isDirty = True
        if isDirty == False:
            break;
    else:
        return True;
    return edges;

n = int(sys.stdin.readline());
m = int(sys.stdin.readline());
edges = [[float("inf") for _ in range(n+1)] for _ in range(n+1)];
for i in range(n+1):
    edges[i][i] = 0;
for _ in range(m):
    a,b,c = map(int, sys.stdin.readline().split());
    if edges[a][b] > c:
        edges[a][b] = c;
F_W(edges);
for e in edges[1:]:
    print(' '.join(map(str, e[1:])));