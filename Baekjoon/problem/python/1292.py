a,b = map(int, input().split());
num = 1;
remain = 1;
total = 0;
A = None;
for i in range(1,b+1):
    if (i == a and A == None):
        A = total;
    total += num;
    remain -= 1;
    if (remain == 0):
        num += 1;
        remain = num;
print(total - A);