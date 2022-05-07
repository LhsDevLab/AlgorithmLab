lines = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1,
         2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1]
my = list(map(lambda e: lines[ord(e)-65], input()))
her = list(map(lambda e: lines[ord(e)-65], input()))
res = []
for i in range(len(my)):
    res.append(my[i])
    res.append(her[i])
for _ in range(len(res)-2):
    temp = []
    for i in range(1, len(res)):
        temp.append((res[i]+res[i-1]) % 10)
    res = temp
print("".join(map(lambda e: str(e), res)))