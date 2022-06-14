for _ in range(int(input())):
    remain = set("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    for c in input():
        remain.discard(c);
    res = 0;
    for e in remain:
        res += ord(e);
    print(res);