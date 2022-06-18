arr = [];
for _ in range(int(input())):
    arr.append(input());
arr.sort(reverse=True);

res = [];
while (len(arr) != 0):
    e = arr.pop();
    for a in arr:
        if (a.find(e) == 0):
            break;
    else:
        res.append(e);
print(len(res));