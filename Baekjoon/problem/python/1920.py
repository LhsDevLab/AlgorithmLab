N = int(input());
arr = input().split();
table = {};
for e in arr:
    table[e] = True;
M = int(input());
targets = input().split();
for t in targets:
    if table.get(t) == None:
        print(0);
    else:
        print(1);