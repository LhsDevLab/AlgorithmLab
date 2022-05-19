import math
D,H,W = map(lambda e : int(e)**2, input().split());
print(math.floor(math.sqrt(D*(H/(H+W)))),
      math.floor(math.sqrt(D*(W/(H+W)))))