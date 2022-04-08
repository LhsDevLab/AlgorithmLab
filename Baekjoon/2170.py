import sys;

N = int(sys.stdin.readline());
arr = [];
for _ in range(N):
    arr.append(tuple(map(int, sys.stdin.readline().split())));
arr.sort();
#arr.sort(key=lambda e : e[0]);
answer = 0;
start,end = 0,0;
for a,b in arr:
    if a > end :
        answer += end-start;
        start,end = a,b;
    elif b > end:
        end = b;
print(answer+(end-start));