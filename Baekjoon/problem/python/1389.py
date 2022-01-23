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

N,M = map(int, input().split());
edges = [[float("inf") for _ in range(N+1)] for _ in range(N+1)];
for i in range(N+1):
    edges[i][i] = 0;
for _ in range(M):
    a,b = map(int, input().split());
    edges[a][b] = 1;
    edges[b][a] = 1;
F_W(edges);
answer = [0,float("inf")];
for n in range(1,N+1):
    total = 0;
    for i in range(1,N+1):
        total += edges[n][i];
    if answer[1] > total:
        answer = [n,total];
print(answer[0]);