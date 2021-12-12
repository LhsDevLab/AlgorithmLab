arr = []
for _ in range(int(input())):
    arr.append(tuple(map(int, input().split())))
arr.sort()
for e in arr:
    print(e[0], e[1])