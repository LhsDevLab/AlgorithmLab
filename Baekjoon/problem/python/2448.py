import sys
import math
preTri = [
    "  *  ",
    " * * ",
    "*****"
]
N = int(sys.stdin.readline())
count = int(math.log2(N/3))
for _ in range(count):
    newTri = preTri[:]
    space = "".join(" " for _ in range(int(len(preTri[-1])/2)+1))
    for i in range(len(newTri)):
        newTri[i] = space+newTri[i]+space
    for e in preTri:
        newTri.append(e+" "+e)
    preTri = newTri

for e in preTri:
    print(e)