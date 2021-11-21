import sys

N = int(sys.stdin.readline())
scores = list(map(int,sys.stdin.readline().split(' ')))
total = 0
for e in scores:
    total += e
maxScore = max(scores)
print(total/N*100/maxScore)