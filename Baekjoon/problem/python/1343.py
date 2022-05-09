arr = [];
count = 0;
for c in input():
    if c == 'X':
        count += 1;
    else:
        arr.append(count);
        count = 0;
arr.append(count);
res = [];
for e in arr:
    if e%2 != 0:
        res = ['-1',''];
        break;
    res.append('AAAA'*(e//4)+'B'*(e%4));
    res.append('.');
res.pop();
print(''.join(res));