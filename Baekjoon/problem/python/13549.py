from collections import deque;
N,K = map(int, input().split());
size = max(N+1,K*2+1);
costs = [size]*(size+1);
costs[N] = 0;
def sol(N,K):
    DQ = deque();
    DQ.append(N);
    while len(DQ) != 0:
        n = DQ.popleft();
        if n == K:
            return costs[n];
        t = n*2;
        if t < size and costs[t] > costs[n]:
            DQ.appendleft(t);
            costs[t] = costs[n];
        for e in n+1, n-1:
            if e < size and e >= 0 and costs[e] > costs[n]:
                DQ.append(e);
                costs[e] = costs[n]+1;
print(sol(N,K));