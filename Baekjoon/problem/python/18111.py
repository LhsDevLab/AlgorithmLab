N,M,B = map(int,input().split())

count = {}
height = -1
time = N*M*1000

for _ in range(N):
    for e in map(int,input().split()):
        if count.get(e) == None:
            count[e] = 1
        else:
            count[e] += 1
keys = count.keys()
for e in range(min(keys),max(max(keys)+1, 257)):
    remainBlock = B
    usedTime = 0
    for key in keys:
        if key < e:
            usedTime += (e-key)*count[key]
            remainBlock -= (e-key)*count[key]
        elif key > e:
            usedTime += (key-e)*count[key]*2
            remainBlock += (key-e)*count[key]
    if remainBlock >= 0 and usedTime <= time:
        height = e
        time = usedTime

print(time, height)