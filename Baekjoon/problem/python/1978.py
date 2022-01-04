N = int(input());
arr = set(map(int, input().split()));
answer = 0;
for i in range(2,1000):
    temp = [];
    for e in arr:
        if e == i:
            answer += 1;
        elif e%i == 0:
            temp.append(e);
    for e in temp:
        arr.remove(e);
    if len(arr) == 0:
        break;
print(answer);