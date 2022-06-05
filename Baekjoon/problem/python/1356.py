arr = list(map(int, input()))

a,b = arr.pop(0), 1;
zeros = 0;
for e in arr:
    if e == 0:
        zeros += 1;
    b  *= e;
if zeros > 1:
    print("YES");
elif zeros == 1:
    print("NO");
else:
    for e in arr:
        if (a == b):
            print("YES");
            break;
        a *= e;
        b /= e if e != 0 else 0;
    else:
        print("NO");