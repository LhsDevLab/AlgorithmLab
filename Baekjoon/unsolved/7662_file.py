import sys
from queue import PriorityQueue

T = int(sys.stdin.readline())

class dualPQ:
    def __init__(self):
        self.maxQ = PriorityQueue()
        self.minQ = PriorityQueue()
        self.count = dict()
    def push(self,value):
        self.maxQ.put(-value)
        self.minQ.put(value)
        if value in self.count:
            self.count[value] += 1
        else:
            self.count[value] = 1
    def popMin(self):
        while True:
            if self.minQ.empty():
                return None
            res = self.minQ.get()
            if res in self.count and self.count[res] > 0:
                self.count[res] -= 1
                return res;
    def popMax(self):
        while True:
            if self.maxQ.empty():
                return None
            res = -self.maxQ.get()
            if res in self.count and self.count[res] > 0:
                self.count[res] -= 1
                return res;

for _ in range(T):
    K = int(sys.stdin.readline())
    queue = dualPQ()
    for _ in range(K):
        opr, num = sys.stdin.readline().split(' ')
        if opr == 'I':
            queue.push(int(num))
        else:
            if int(num) == -1:
                queue.popMin()
            else:
                queue.popMax()
    max = queue.popMax()
    if max == None:
        print("EMPTY")
    else:
        min = queue.popMin()
        if min == None:
            min = max
        print(f"{max} {min}")