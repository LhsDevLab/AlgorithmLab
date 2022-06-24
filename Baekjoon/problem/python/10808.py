arr = [0]*26;
for e in input():
    arr[ord(e)-97] += 1;
print(' '.join(map(str, arr)));