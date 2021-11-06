import sys

input = sys.stdin.readline()
N = int(input)

def calculNum(num):
    res = num
    while num > 0:
        res += num%10
        num //= 10
    return res

res = 0
for i in range( int(N)-9*len(input) , int(N)):
    if calculNum(i) == N:
        res = i
        break
print(res)