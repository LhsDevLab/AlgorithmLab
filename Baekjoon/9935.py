str = input();
res = [0]*(len(str)+1);
bomb = input();

idx = 0;
for c in str:
    res[idx] = c;
    if c == bomb[-1]:
        for j in range(len(bomb)-1):
            if bomb[j] != res[idx+j-len(bomb)+1]:
                break;
        else:
            idx = idx-len(bomb);
    idx += 1;
print(''.join(res[0:idx]))