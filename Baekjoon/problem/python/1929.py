M,N = map(int,input().split())
prime = [True for _ in range(N+1)]
res = []

def f(n):
    global prime
    global res
    global N
    temp = n
    while temp <= N:
        prime[temp] = False
        temp += n
    res.append(n)
    
for e in range(2,N+1):
    if prime[e]:
        f(e)

while res[0] < M:
    res.pop(0)
    
for e in res:
    print(e)