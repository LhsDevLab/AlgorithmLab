def GCF(a,b):
    while b != 0:
        c = a%b;
        a = b;
        b = c;
    return a;
a,b = map(int,input().split());
gcf = GCF(a,b);
print(gcf);
print(int(a*b/gcf));