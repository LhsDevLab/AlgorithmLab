from inspect import stack
import sys;
N = int(sys.stdin.readline());
tree = [set() for _ in range(N+1)];
parents = [None for _ in range(N+1)];
for _ in range(N-1):
    a,b = map(int, sys.stdin.readline().split());
    tree[a].add(b);
    tree[b].add(a);
stack = [1];
while len(stack) != 0:
    root = stack.pop();
    childs = tree[root];
    for c in childs:
        tree[c].remove(root);
        parents[c] = root;
        stack.append(c);
for e in parents[2:]:
    print(e);