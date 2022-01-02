import sys;
N,M = map(int,sys.stdin.readline().split());
graph = dict([(i,set()) for i in range(1,N+1)]);
for _ in range(M):
    a,b = map(int,sys.stdin.readline().split());
    graph[a].add(b);
    graph[b].add(a);
keys = set(graph.keys());
answer = 0;
while len(keys) != 0:
    node = keys.pop();
    answer += 1;
    cluster = {node};
    stack = [node];
    while len(stack) != 0:
        links = graph[stack.pop()];
        for link in links:
            if link not in cluster:
                stack.append(link);
            cluster.add(link);
            keys.discard(link);
print(answer);