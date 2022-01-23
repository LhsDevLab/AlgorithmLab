import sys

N = int(sys.stdin.readline())

count2 = 0
count5 = 0

for i in range(1,N+1):
    while i%5 == 0:
        count5 += 1
        i /= 5
    while i%2 == 0:
        count2 += 1
        i /= 2

print(min(count2, count5))