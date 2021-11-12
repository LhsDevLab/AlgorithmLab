import sys
T = int(sys.stdin.readline())

def addArrays(A,B):
    res = set()
    for a in A:
        for b in B:
            res.add(a+b)
    return list(res)

def compare(arr,target):
    arr.sort();
    res = arr[0]
    for e in arr:
        if abs(target-e) < abs(target-res):
            res = e
    return res

def binarySearch(arr,target):
    f,r = 0,len(arr)-1
    while True:
        if r-f <= 1:
            break;
        mid = int((r+f)/2)
        if arr[mid] > target:
            r = mid
        elif arr[mid] < target:
            f = mid
        else:
            return mid,mid
    return f,r
    
def solution(target, size):
    arr = []
    for _ in range(4):
        arr.append(list(map(int,sys.stdin.readline().split(' '))))
    arr = [addArrays(arr[0],arr[1]),addArrays(arr[2],arr[3])]
    if len(arr[0]) > len(arr[1]):
        arr[0],arr[1] = arr[1],arr[0]
    arr[1].sort()
    res = arr[0][0]+arr[1][0]
    for e in arr[0]:
        a,b = binarySearch(arr[1],target-e)
        a = arr[1][a]+e
        b = arr[1][b]+e
        res = compare([a,b,res], target)
    return res
for _ in range(T):
    target , size = map(int,sys.stdin.readline().split(' '))
    print(solution(target , size))