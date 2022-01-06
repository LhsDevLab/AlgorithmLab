import sys;
N = int(sys.stdin.readline());
total = 0;
count = [0 for _ in range(8001)];
modes = [];
maxCount = -1;
arr = [];

for _ in range(N):
    num = int(sys.stdin.readline());
    arr.append(num);
    total += num;
    count[num] += 1;
    if count[num] > maxCount:
        maxCount = count[num];
        modes = [num];
    elif count[num] == maxCount:
        modes.append(num);
arr.sort();
print(round(total/N));
print(arr[int(N/2)]);
if len(modes) > 1:
    modes.sort();
    print(modes[1]);
else:
    print(modes[0]);
print(arr[-1]-arr[0]);