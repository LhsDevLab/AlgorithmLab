import sys

T = int(sys.stdin.readline())

def F(n):
    res = 10
    while res <= n:
        res *= 10
    return res-1-n

cases = []
for idx in range(T):
    cases.append(int(sys.stdin.readline()))

for case in cases:
    target = 10;
    while target <= case:
        target *= 10
    target /= 2
    if case < target:
        target = case
    print(int(target*F(target)))