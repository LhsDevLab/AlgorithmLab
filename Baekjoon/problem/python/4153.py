while True:
    a,b,c = map(int,input().split());
    if (a == 0): break;
    print("right" if (max(a,b,c)**2)*2 == a**2+b**2+c**2 else "wrong");