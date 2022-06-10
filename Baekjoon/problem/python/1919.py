count = {};
def add(target,offset):
    global count;
    if count.get(target) == None:
        count[target] = offset;
    else:
        count[target] += offset;
for e in input():
    add(e,1);
for e in input():
    add(e,-1);
res = 0;
for e in count.values():
    res += abs(e);
print(res);