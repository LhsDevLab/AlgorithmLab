N = int(input());
a,b = 1,1;
total = 1;
answer = 0;
while a <= N:
    if total < N:
        b += 1;
        total += b;
    else:
        if total == N:
            answer += 1;
        total -= a;
        a += 1;
print(answer)