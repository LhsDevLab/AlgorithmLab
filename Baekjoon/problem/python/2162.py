import sys
input = open("input2.txt","r")

def isCross(A,B):
    def vec(a,b):
        return (b[0]-a[0], b[1]-a[1])
    def ccw(a,b):
        return a[0]*b[1] - a[1]*b[0]
    def rangeCheck(A,B):
        A = sorted(A)
        B = sorted(B)
        if (A[0] <= B[0] <=A[1]) or (A[0] <= B[1] <= A[1]):
            return True
        return False
    v1 = ccw(vec(A[0],A[1]),vec(A[0],B[0]))
    v2 = ccw(vec(A[0],A[1]),vec(A[0],B[1]))
    v3 = ccw(vec(B[0],B[1]),vec(B[0],A[0]))
    v4 = ccw(vec(B[0],B[1]),vec(B[0],A[1]))
    if v1==v2==v3==v4==0:
        if ((rangeCheck((A[0][0],A[1][0]),(B[0][0],B[1][0])) and rangeCheck((A[0][1],A[1][1]),(B[0][1],B[1][1])))
            or (rangeCheck((B[0][0],B[1][0]),(A[0][0],A[1][0])) and rangeCheck((B[0][1],B[1][1]),(A[0][1],A[1][1])))):
            return True
        else:
            return False
    elif ((v1*v2<=0) and (v3*v4<=0)):
        return True
    return False
N = int(input.readline())
groups = dict()
for _ in range(N):
    a,b,c,d = map(int,input.readline().split(' '))
    line = ((a,b),(c,d))
    belongs = []
    for key in groups.keys():
        for item in groups[key]:
            if isCross(line,item):
                belongs.append(key)
                break;
    if len(belongs) == 0:
        groups[line] = [line]
    else:
        newArr = [line]
        for key in belongs:
            newArr += groups[key]
            del groups[key]
        groups[line] = newArr
keys = groups.keys() 
print(len(keys))
print(max(map(lambda e: len(groups[e]),keys)))