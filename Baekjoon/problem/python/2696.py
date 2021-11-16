import sys
import math
from queue import PriorityQueue

out = ""
for _ in range(int(sys.stdin.readline())):
    N = int(sys.stdin.readline())
    dataList = []
    for _ in range(math.ceil(N/10)):
        dataList += list(map(int, sys.stdin.readline().split(' ')))
    mid = dataList[0]
    res = [mid]
    bigger = PriorityQueue()
    smaller = PriorityQueue()
    def put(v):
        if v < mid:
            smaller.put(-v)
        else:
            bigger.put(v)
    for i in range(1,len(dataList),2):
        if len(dataList) <= i+1:
            break;
        put(dataList[i]); put(dataList[i+1])
        if bigger.qsize() > smaller.qsize():
            temp = bigger.get()
            smaller.put(-mid)
            mid = temp
        elif smaller.qsize() > bigger.qsize():
            temp = -smaller.get()
            bigger.put(mid)
            mid = temp
        res.append(mid)
    out += str(len(res))+'\n'
    for i in range(0,len(res),10):
        out += " ".join(map(str,res[i:i+10]))+'\n'
print(out.strip())