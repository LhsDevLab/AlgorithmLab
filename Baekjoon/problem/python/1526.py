N = int(input())
for i in range(N,3,-1):
    n = i;
    while i != 0:
        if i%10 not in [4,7]:
            break;
        i //= 10;
    else:
        print(n);
        break;