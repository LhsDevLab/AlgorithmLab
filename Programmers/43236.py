def solution(distance, rocks, n):
    rocks.sort();
    rocks = [0]+rocks+[distance];
    intv = [];
    # index = {};
    # def add(key, val):
    #     if index.get(key) == None:
    #         index[key] = [val];
    #     else:
    #         index[key].append(val);
    for i in range(len(rocks)-1):
        val = rocks[i+1]-rocks[i];
        intv.append(val);
    print(intv);
    return;

print(solution(25,	[2, 14, 11, 21, 17],	2));

# 2 1 5 2 4

# 2 6 2 4