K,N = map(int, input().split());
arr = [];
for _ in range(K):
    arr.append(int(input()));
Max = 0;
for e in arr:
    Max += e;
Max = int(Max/N);

def count(l):
    global arr;
    total = 0;
    for line in arr:
        total += int(line/l);
    return total;

front = 1;
rear = Max;
while front < rear:
    middle = int((front+rear)/2);
    if count(middle) < N:
        rear = middle;
    else:
        front = middle+1;
print(front-1 if count(front) < N else front);