res = set()
for _ in range(int(input())):
    res.add(input())
res = list(map(lambda e : (len(e),e),res))
res.sort()
for e in res:
    print(e[1])