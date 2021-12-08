N = int(input())
count = [0,1,2,4]
for i in range(4, 11):
    count.append(count[i-1]+count[i-2]+count[i-3])
for _ in range(N):
    print(count[int(input())])