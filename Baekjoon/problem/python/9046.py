for _ in range(int(input())):
    Max = [['*'], 0];
    count = {};
    for e in input():
        if e == ' ': continue;
        if count.get(e) == None:
            count[e] = 0;
        count[e] += 1;
        if Max[1] < count[e]:
            Max = [[e], count[e]];
        elif Max[1] == count[e]:
            Max[0].append(e);
    print(Max[0].pop() if len(Max[0]) == 1 else '?');