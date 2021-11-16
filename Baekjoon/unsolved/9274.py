import sys
import math
preTri = [
    "  *",
    " * *",
    "*****"
]
def makeEmptyString(n):
    return "".join(" " for _ in range(n))
N = int(sys.stdin.readline())
count = int(math.log2(N/3))
for _ in range(count):
    newTri = preTri[:]
    for i in range(len(newTri)):
        newTri[i] = makeEmptyString(int(len(preTri[-1])/2)+1)+newTri[i]
    space = makeEmptyString(len(preTri))
    for e in preTri:
        newTri.append(e+space+e)
        space = space[1:]
    preTri = newTri

for e in preTri:
    print(e)