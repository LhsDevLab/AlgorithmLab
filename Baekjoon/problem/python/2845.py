a,b = map(int, input().split());
a = a*b;
print(" ".join(map(lambda e : str(int(e)-a), input().split())));