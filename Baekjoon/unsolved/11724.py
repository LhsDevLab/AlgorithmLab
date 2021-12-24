N,M = map(int,input().split());
graph = {};
def add(node,v):
    global graph;
    if graph.get(node) == None:
        graph[node] = {v};
    else:
        graph[node].add(v);
for _ in range(M):
    a,b = map(int,input().split());
    add(a,b);
    add(b,a);
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