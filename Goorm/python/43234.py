import sys
from itertools import permutations, product

file = open('./output.txt','wt')

N = int(sys.stdin.readline())

oddList = list(map(lambda e : [1]+list(e),permutations(range(3,N,2),int(N/2)-1)))
evenList = list(map(list,permutations(range(2,N+1,2),int(N/2))))
pairList = list(product(oddList,evenList))
primeList = [2]

for i in range(3,2*N):
    isPrime = True
    for j in primeList:
        if (i%j == 0):
            isPrime = False
            break
    if isPrime :
        primeList.append(i)

def isCorrect(A,B):
    arr = []
    for i in range(int(N/2)):
        arr = arr+[A[i],B[i]]
    file.write(" ".join(map(str,arr))+'\n')
    for i in range(N-1):
        if arr[i]+arr[i+1] not in primeList:
            return False
    if arr[-1]+arr[0] not in primeList:
        return False
    return arr

correctSet = []

for A,B in pairList:
    res = isCorrect(A,B)
    if (res != False):
        correctSet.append(res)
correctSet.sort()
for e in correctSet:
    print(" ".join(map(str,e)))