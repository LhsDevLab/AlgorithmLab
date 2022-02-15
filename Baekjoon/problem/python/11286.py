import heapq;
import sys;

queue = [];
for _ in range(int(sys.stdin.readline())):
    n = int(sys.stdin.readline());
    if n == 0:
        print(0 if len(queue) == 0 else heapq.heappop(queue)[1]);
    else:
        heapq.heappush(queue,(abs(n),n));