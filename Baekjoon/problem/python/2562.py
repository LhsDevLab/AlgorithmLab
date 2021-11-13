import sys
idx = 0
maxV = 0
for i in range(1,10):
    input = int(sys.stdin.readline())
    if input > maxV:
        maxV = input
        idx = i
print(maxV)
print(idx)