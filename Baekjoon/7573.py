import sys;

N,I,M = map(int, sys.stdin.readline().split());
I /= 2;
clusters = dict();
res = 0;
def apply(cluster, x,y):
    a,b,c,d = cluster;
    if x < a:
        a = x;
    elif x > c:
        c = x;
    if y < b:
        b = y;
    elif y > d:
        b = y;
    if I < (b-a)+(d-c):
        return None;
    return [a,b,c,d];
for _ in range(M):
    a,b = map(int, sys.stdin.readline().split());
    temp = [(a,b,a,b)];
    for cluster in clusters.keys():
        t = apply(cluster, a,b);
        if t != None:
            temp.append(t);
    for a,b,c,d in temp:
        if not clusters.get((a,b,c,d)):
            clusters[(a,b,c,d)] = 1;
        else:
            clusters[(a,b,c,d)] += 1;
            if res < clusters[(a,b,c,d)]:
                res = clusters[(a,b,c,d)];
print(res);