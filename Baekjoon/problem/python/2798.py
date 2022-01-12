from itertools import combinations;
N,M = map(int, input().split());
cards = tuple(map(int,input().split()));
answer = 0;
for a,b,c in combinations(range(N),3):
    temp = cards[a]+cards[b]+cards[c];
    if temp <= M and answer < temp:
        answer = temp;
print(answer);