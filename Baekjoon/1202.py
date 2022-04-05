import sys,heapq;

N,K = map(int, sys.stdin.readline().split());
jewels = [];
bags = [];
for _ in range(N):
    jewels.append(list(map(int, sys.stdin.readline().split())));
for _ in range(K):
    heapq.heappush(bags, int(sys.stdin.readline()));
jewels.sort(key=lambda e: e[1]/e[0],reverse=True);
answer = 0;
for w,v in jewels:
    print(w,v)