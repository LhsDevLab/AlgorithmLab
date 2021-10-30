import sys;

N = int(sys.stdin.readline());
links = [[] for _ in range(N+1)];
parents = [0 for _ in range(N+1)];
parents[1] = 0;
depths = [0 for _ in range(N+1)];
depths[1] = 1;

for _ in range(N-1) :
    a,b = map(int,sys.stdin.readline().split(' '));
    links[a].append(b);
    links[b].append(a);

stack = [1];
while len(stack) != 0 :
    node = stack.pop();
    for link in links[node] :
        if depths[link] != 0 :
            parents[node] = link;
            depths[node] = depths[parents[node]]+1;
        else : 
            stack.append(link);

def getAncestor(node, depth) :
    while depths[node] != depth :
        node = parents[node];
    return node;

res = "";
M = int(sys.stdin.readline());
for _ in range(M) :
    a,b = map(int,sys.stdin.readline().split(' '));
    depth = min(depths[a],depths[b]);
    while True :
        if depth == 1 : 
            res += '1\n';
            break;
        A = getAncestor(a,depth);
        B = getAncestor(b,depth);
        if A == B :
            res += str(A)+'\n';
            break;
        depth -= 1;
print(res[0:-1]);