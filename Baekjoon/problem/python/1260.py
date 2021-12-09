N,M,V = map(int,input().split())

graph = {}
nonVisited = set()

def add(a,b):
    global graph
    if graph.get(a) == None:
        graph[a] = [b]
    else:
        graph[a].append(b)
        
for _ in range(M):
    a,b = map(int,input().split())
    nonVisited.add(a)
    nonVisited.add(b)
    add(a,b)
    add(b,a)
    
for key in graph.keys():
    graph[key].sort()

def dfs(graph,nonVisited, start):
    if start not in nonVisited:
        return str(start)
    res = []
    stack = [start]
    while len(stack) != 0:
        node = stack.pop()
        if node in nonVisited:
            res.append(node)
            stack.extend(graph[node][::-1])
            nonVisited.remove(node)
    return ' '.join(map(str,res))

def bfs(graph,nonVisited, start):
    if start not in nonVisited:
        return str(start)
    res = []
    stack = [start]
    while len(stack) != 0:
        node = stack.pop(0)
        if node in nonVisited:
            res.append(node)
            stack.extend(graph[node])
            nonVisited.remove(node)
    return ' '.join(map(str,res))  

print(dfs(graph,set(nonVisited),V))
print(bfs(graph,set(nonVisited),V))