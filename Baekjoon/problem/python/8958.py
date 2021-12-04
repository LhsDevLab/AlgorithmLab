N = int(input())
for _ in range(N):
    res = 0
    count = 0
    for e in input():
        if 'X' == e:
            res += (count+1)*count/2
            count = 0
        else:
            count += 1
    res += (count+1)*count/2
    print(int(res))