for _ in range(int(input())):
    H,W,N = map(int,input().split())
    N -= 1
    print("%d%02d"%(N%H+1,int(N/H)+1))