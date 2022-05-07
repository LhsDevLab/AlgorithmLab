num = 0;
inp = input();
for c in inp:
    num += int(c);
res = 0 if len(inp) == 1 else 1;
while num//10 > 0:
    temp = 0;
    while num != 0:
        temp += num%10;
        num = num//10;
    num = temp;
    res += 1;
print(res);
print('YES' if num%3 == 0 else 'NO');