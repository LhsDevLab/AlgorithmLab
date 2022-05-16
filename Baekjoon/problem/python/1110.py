N = int(input());
A,B = N//10, N%10;
res = 1;
def func(a,b):
    return b, (a+b)%10;
a,b = func(A,B);
while a != A or b != B:
    a,b = func(a,b);
    res += 1;
print(res)