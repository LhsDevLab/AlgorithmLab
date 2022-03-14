from itertools import permutations;
N,M = map(int, input().split());
arr = list(map(int, input().split()));
arr.sort();
temp = list(set(permutations(arr,M)));
temp.sort();
for e in temp:
    print(' '.join(map(str, e)));