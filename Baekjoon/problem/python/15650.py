N,M = map(int, input().split(' '))

answer = [[i] for i in range(1,N+1)]
def process():
    res = []
    for i in range(1,N+1):
        for e in answer:
            if i < e[0]:
                res.append([i]+e)
    return res

for _ in range(M-1):
    answer = process()
for e in answer:
    print(' '.join(map(str, e)))