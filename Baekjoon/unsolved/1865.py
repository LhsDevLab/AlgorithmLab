def F_W(edges):
    N = len(edges);
    dp = [];
    for e in edges:
        dp.append(e[:]);
    for _ in range(N-1):
        isDirty = False;
        for node in range(1,N):
            for i in range(1,N):
                if i == node: continue;
                for j in range(1,N):
                    if j == node: continue;
                    elif dp[i][j] > dp[i][node] + dp[node][j]:
                        dp[i][j] = dp[i][node] + dp[node][j]
                        isDirty = True
        if isDirty == False:
            break;
    else:
        return True;
    return False;


for _ in range(int(input())):
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
    for _ in range(W):
        S,E,T = map(int, input().split());
        if edges[S][E] > T:
            edges[S][E] = -T;
    if F_W(edges):
        print("YES");
    else:
        print("NO");