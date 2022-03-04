import heapq;

def Dijkstra(s,graph):
    size = len(graph);
    INF = float('inf');
    res = [INF for _ in range(size)];
    res[s] = 0;
    remain = set([i for i in range(0,size)]);
    while (len(remain)!=0):
        temp = list(map(lambda e : (res[e],e),remain));
        v,n = min(temp);
        remain.remove(n);
        for i in range(len(res)):
            res[i] = min(res[i], graph[n][i]+v);
    return res;

print(Dijkstra(0,[
        [ float("inf"), 4, 2, 7 ],
        [ 1, float("inf"), 5, float("inf") ],
        [ 2, float("inf"), float("inf"), 4 ],
        [ float("inf"), 3, float("inf"), float("inf") ]
    ]))