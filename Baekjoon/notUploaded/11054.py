N = int(input());
arr = tuple(map(int,input().split()));
def func(arr,N):
    res = [0]*N;
    res[0] = 1;
    for i in range(N):
        m = 0;
        for j in range(i):
            if arr[j] < arr[i] and res[j] > m:
                m = res[j];
        res[i] = m+1;
    return res;
dp1 = func(arr,N);
dp2 = func(arr[::-1],N)[::-1];
print(max(map(lambda i : dp1[i]+dp2[i], range(N)))-1);