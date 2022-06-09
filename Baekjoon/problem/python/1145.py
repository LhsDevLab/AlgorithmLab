arr = list(map(int, input().split()));
arr.sort();
sum = arr[:];
while True:
    idx, count = 0, 1;
    for i in range(1,5):
        if sum[idx] > sum[i]:
            idx, count = i, 1
        elif sum[idx] == sum[i]:
            count += 1;
    if count >= 3:
        print(sum[idx]);
        break;
    else:
        sum[idx] += arr[idx];