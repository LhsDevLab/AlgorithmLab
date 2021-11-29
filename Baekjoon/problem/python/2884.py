H,M = map(int,input().split(' '))
M += H*60-45
print(f"{M//60 + 24 if M<0 else M//60} {M%60}")