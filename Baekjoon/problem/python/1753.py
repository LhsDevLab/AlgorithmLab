import sys;
import heapq;

INF = float('inf');
[V,E] = map(int,sys.stdin.readline().split());
K = int(sys.stdin.readline());
graph = [dict() for _ in range(V)];

for _ in range(E):
    a,b,t = map(int,sys.stdin.readline().split());
    a,b = a-1, b-1;
    if graph[a].get(b) == None:
        graph[a][b] = t;
    else:
        graph[a][b] = min(graph[a][b], t);
        
def Dijkstra(s,graph):
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

res = Dijkstra(K-1, graph);

for e in res:
    print("INF" if e == INF else e);