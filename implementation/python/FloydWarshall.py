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

N,M,W = map(int, input().split());
edges = [[float("inf") for _ in range(N+1)] for _ in range(N+1)];
for i in range(N+1):
    edges[i][i] = 0;
for _ in range(M):
    S,E,T = map(int, input().split());
    if edges[S][E] > T:
        edges[S][E] = T;
    if edges[E][S] > T:
        edges[E][S] = T;
F_W(edges);#isCycle : True