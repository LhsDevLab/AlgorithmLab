def sol(K,N):
    arr = [i for i in range(1,N+1)];
    for _ in range(K):
        for i in range(N-1):
            arr[i+1] += arr[i];
    print(arr[N-1]);
for _ in range(int(input())):
    sol(int(input()),int(input()));