import math

for _ in range(int(input())):
    M,N,x,y = map(int, input().split());
    LCM = M*N//math.gcd(M,N);
    for n in range(x,LCM+1,M):
        if (n-y)%N == 0:
            print(n);
            break;
    else:
        print(-1);