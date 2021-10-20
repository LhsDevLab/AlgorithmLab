import sys

A, B = map(lambda e : int(e[::-1]),sys.stdin.readline().split())

print(max(A,B))