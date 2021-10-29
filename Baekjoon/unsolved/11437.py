import sys;

N = int(sys.stdin.readline());
tasks = [[] for _ in range(N+1)];
parents = [0 for _ in range(N+1)];
for _ in range(N-1) :
    a,b = map(int,sys.stdin.readline().split(' '));
    tasks[a].append(b);
    tasks[b].append(a);

def setParents(node):
    for e in tasks[node] :
        if e != parents[node] :
            parents[e] = node;
            setParents(e);
setParents(1);

res = "";
M = int(sys.stdin.readline());
for _ in range(M) :
    a,b = map(int,sys.stdin.readline().split(' '));
    if a == b :
        res += str(a)+'\n';
        break;
    A = [a];
    while parents[a] != 0 :
        a = parents[a];
        A.append(a);     
    B = [b];
    while parents[b] != 0 :
        b = parents[b];
        B.append(b);     
    i = 0; 
    while True:
        if A[len(A)-i-1] != B[len(B)-i-1]:
            res += str(A[len(A)-i])+"\n";
            break;
        i += 1;
print(res[0:-1]);