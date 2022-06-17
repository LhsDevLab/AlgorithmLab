N,L = input().split();
N = int(N);
num = 0;
for _ in range(N):
    num += 1;
    while(L in str(num)):
        num += 1;
print(num)