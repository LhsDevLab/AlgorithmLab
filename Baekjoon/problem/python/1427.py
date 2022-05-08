arr = [0] * 10;
for c in input():
    arr[int(c)] += 1;
res = [];
for i in range(9,-1, -1):
    for _ in range(arr[i]):
        res.append(i);
print(''.join(map(str, res)));