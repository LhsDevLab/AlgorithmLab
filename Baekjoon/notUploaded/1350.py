N = int(input());
arr = list(map(int, input().split()));
size = int(input());
res = 0;
for e in arr:
    res += (e-1)//size+1;
print(res*size);