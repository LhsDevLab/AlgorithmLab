import sys;

N,I,M = map(int, sys.stdin.readline().split());
I = int(I/2);
scanList = set();

def apply(a,b, I):
    for h in range(1,I):
        w = I-h;
        for i in range(h+1):
            scanList.add((a-i, b, h,w));
    return;

fishs = set();
for _ in range(M):
    a,b = map(int, sys.stdin.readline().split());
    fishs.add((a,b));
    apply(a,b, I);
res = 0;
for a,b,c,d in scanList:
    count = 0;
    if a < 0 or b < 0:
        continue;
    for i in range(c+1):
        for j in range(d+1):
            if (a+i,b+j) in fishs:
                count += 1;
    if count > res:
        res = count;
print(res);