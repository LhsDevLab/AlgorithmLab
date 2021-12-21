N = int(input());
arr = [];
for _ in range(N):
    x,y = map(int,input().split());
    arr.append((y,x));
arr.sort()
for y,x in arr:
    print(x,y);