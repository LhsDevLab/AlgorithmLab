count = 0;
for i in range(8):
    temp = input();
    for e in range(i%2,8,2):
        if (temp[e] == 'F'):
            count += 1;
print(count);