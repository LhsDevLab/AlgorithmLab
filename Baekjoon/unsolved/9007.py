import sys
T = int(sys.stdin.readline())

def mergeArrays(A,B):
    res = set()
    for a in A:
        for b in B:
            res.add(a+b)
    return list(res)

def solution(target, size):
    arr = []
    for _ in range(4):
        arr.append(list(map(int,sys.stdin.readline().split(' '))))
    arr = [mergeArrays(arr[0],arr[1]),mergeArrays(arr[2],arr[3])]
    arr[0].sort();arr[1].sort(reverse=True)
    idx = 0
    res = float("inf")
    for A in arr[0]:
        pre = (A+arr[1][idx])-target
        while idx+1 < len(arr[1]) and abs(A+arr[1][idx+1]-target) <= abs(pre):
            idx += 1
            pre = (A+arr[1][idx])-target
        if (abs(res) > abs(pre)) or (abs(res) == abs(pre) and pre < 0):
            res = pre
    return res+target
for _ in range(T):
    target , size = map(int,sys.stdin.readline().split(' '))
    print(solution(target , size))