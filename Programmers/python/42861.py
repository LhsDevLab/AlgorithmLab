import heapq;
def solution(n, costs):
    answer = 0;
    graph = [[] for _ in range(n)];
    for a,b,v in costs:
        graph[a].append((v,b));
        graph[b].append((v,a));
    queue = graph[0];
    heapq.heapify(queue);
    used = set([0]);
    while len(queue) != 0:
        v,b = heapq.heappop(queue);
        if b in used:
            continue;
        answer += v;
        used.add(b);
        for v,e in graph[b]:
            if e not in used:
                heapq.heappush(queue,(v,e));
    return answer;

print(solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]))