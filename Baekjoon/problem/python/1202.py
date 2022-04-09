import sys,heapq;

N,K = map(int, sys.stdin.readline().split());
jewels = [];
bags = [];
for _ in range(N):
    w,v = map(int, sys.stdin.readline().split())
    jewels.append((-v,w));
for _ in range(K):
    bags.append(int(sys.stdin.readline()));
jewels.sort(key=lambda e : e[1], reverse=True);
bags.sort();
answer = 0;
queue = [];
for bag in bags:
    while len(jewels) != 0 and jewels[-1][1] <= bag:
        heapq.heappush(queue, jewels.pop());
    if len(queue) != 0:
        answer -= heapq.heappop(queue)[0];
print(answer);
        