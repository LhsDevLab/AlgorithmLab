import sys
from queue import PriorityQueue

T = int(sys.stdin.readline())

def solution(N, times, childs, reqCount ,goal):
    queue = PriorityQueue()
    current = 0
    queue.put((0,0))

    while not queue.empty() :
        node = queue.get()
        current = node[0]
        node = node[1]
        if node == goal:
            return current
        for child in childs[node]:
            reqCount[child] -= 1

        for e in range(1, N+1):
            if reqCount[e] == 0 :
                queue.put((current+times[e-1],e))
                reqCount[e] = -1
    return False

for _ in range(T):
    N,K = map(int,sys.stdin.readline().split(' '))
    times = list(map(int,sys.stdin.readline().split(' ')))
    childs = [[] for _ in range(N+1)]
    reqCount = [0 for _ in range(N+1)]
    reqCount[0] = -1;
    for _ in range(K):
        p,c = map(int,sys.stdin.readline().split(' '))
        reqCount[c] += 1 
        childs[p].append(c)
    goal = int(sys.stdin.readline())
    print(solution(N, times, childs, reqCount ,goal))