A,B,C = map(int, input().split())
C -= B;
print(-1 if C<=0 else (A//C)+1)