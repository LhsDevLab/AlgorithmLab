N, X = map(int, input().split(' '))
numList = list(map(int, input().split(' ')))
res = ''
for num in numList:
    if num < X:
        res += str(num)+' '
print(res.strip())