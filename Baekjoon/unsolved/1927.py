import heapq;

queue = [];

for _ in range(int(input())):
    n = int(input());
    if n == 0:
        if len(queue) == 0:
            print(0);
        else:
            print(heapq.heappop(queue));
    else:
        heapq.heappush(queue,n);