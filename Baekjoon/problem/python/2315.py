import sys

N,M = map(int, sys.stdin.readline().split(' '))

pos_cost = []
costs = [[float("inf") for _ in range(N)] for _ in range(N) ]
costPresum = [0]
for i in range(N):
    costs[i][i] = 0

def getCost(a,b):
    return costPresum[-1]-(costPresum[b+1]-costPresum[a])

def calculToRight(a,b):
    c = b+1
    if c == N or costs[c][a] != float("inf"):
        return False
    cost = getCost(a,b)
    costs[c][a] = min(cost*(pos_cost[c][0]-pos_cost[a][0])+costs[a][b], cost*(pos_cost[c][0]-pos_cost[b][0])+costs[b][a])
    return True

def calculToLeft(b,c):
    a = b-1
    if a == -1 or costs[a][c] != float("inf"):
        return False
    cost = getCost(b,c)
    costs[a][c] = min(cost*(pos_cost[c][0]-pos_cost[a][0])+costs[c][b], cost*(pos_cost[b][0]-pos_cost[a][0])+costs[b][c])
    return True

for _ in range(N):
    temp = tuple(map(int,sys.stdin.readline().split(' ')))
    costPresum.append(costPresum[-1]+temp[1])
    pos_cost.append(temp)
    
queue = [(M-1,M-1)]

while len(queue) != 0:
    a,b = queue.pop(0)
    if calculToLeft(a,b):
        queue.append((a-1,b))
    if calculToRight(a,b):
        queue.append((a,b+1))
        
print(min(costs[0][N-1],costs[N-1][0]))