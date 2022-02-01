for _ in range(int(input())):
    itemSet = {};
    for _ in range(int(input())):
        item, type = input().split();
        if itemSet.get(type) == None :
            itemSet[type] = set([item]);
        else:
            itemSet[type].add(item);
    res = 1;
    for e in itemSet.values():
        res *= (len(e)+1) ;
    print(res-1);