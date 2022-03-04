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
import heapq;
def Dijkstra_PQ(s,graph):
    size = len(graph);
    INF = float('inf');
    res = [INF for _ in range(size)];
    res[s] = 0;
    queue = [[0,s]];
    while len(queue) != 0:
        t,n = heapq.heappop(queue);
        for k,v in graph[n].items():
            cost = v+t;
            if cost < res[k]:
                res[k] = cost;
                heapq.heappush(queue,[cost,k]);
    return res;
    
print(Dijkstra(0,[
        [ float("inf"), 4, 2, 7 ],
        [ 1, float("inf"), 5, float("inf") ],
        [ 2, float("inf"), float("inf"), 4 ],
        [ float("inf"), 3, float("inf"), float("inf") ]
    ]))

print(Dijkstra_PQ(0,
        [{1: 2, 2: 3}, {2: 4, 3: 5}, {3: 6}, {}, {0: 1}]
    ))