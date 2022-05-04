N = int(input());
arr = [];
for _ in range(N):
    arr.append(input());
res = [];
base = arr.pop();
for i in range(len(base)):
    for e in arr:
        if e[i] != base[i]:
            break;
    else:
        res.append(base[i]);
        continue;
    res.append('?')
print(''.join(res));