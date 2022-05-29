def parse():
    t = input();
    return (ord(t[0])-65, int(t[1])-1);
def check(r,c,a,b):
    s = set([1,2]);
    s.discard(abs(r-a));
    s.discard(abs(c-b));
    if len(s) != 0:
        return False;
    return True;
start = parse();
r,c = start;
visited = set([(r,c)]);
res = "Valid";
for _ in range(35):
    a,b = parse();
    if not check(r,c,a,b) or (a,b) in visited:
        res = "Invalid";
    r,c = a,b;
    visited.add((r,c))
if (not check(start[0],start[1], r,c)):
    res = "Invalid";
print(res);