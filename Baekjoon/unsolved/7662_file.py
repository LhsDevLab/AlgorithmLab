import sys
import math
input = open("input2.txt","r")

T = int(input.readline())

class MMheap:
    def __init__(self):
        self.arr = []
    def isMinlvl(self, i):
        return True if int(math.log2(i))%2 == 0 else False
    def getChild(self, i):
        if len(self.arr) > i*2+2:
            return [self.arr[i*2+2], self.arr[i*2+1]]
        elif len(self.arr) == i*2+1:
            return [self.arr[i*2+1]]
        else:
            return []
    def getParent(self, i):
        return int((i-1)/2)
    def push_down(self, i):
        if self.isMinlvl(i):
            self.push_down_min(self, i)
        else:
            self.push_down_max(self, i)
    def push_down_min(self, i):
        childs = self.getChild(self, i)
        if len(childs) != 0:
            grandChilds = []
            for item in map(lambda e : self.getChild(self, e), childs):
                grandChilds += item
            m = min(childs+grandChilds, key=lambda e: self.arr[e])
            if m in childs:
                if self.arr[m] < self.arr[i] :
                    self.arr[m],self.arr[i] = self.arr[i],self.arr[m]
                    if self.arr[m] > self.arr[self.getParent(m)] :
                        self.arr[m],self.arr[self.getParent(m)] = self.arr[self.getParent(m)],self.arr[m]
                    self.push_down_min(self, m)
            elif self.arr[m] < self.arr[i]:
                self.arr[m],self.arr[i] = self.arr[i],self.arr[m]
    def push_down_max(self, i):
        
        

for _ in range(T):
    K = int(input.readline())
    queue = dualPQ()
    for _ in range(K):
        opr, num = input.readline().split(' ')
        if opr == 'I':
            queue.push(Node(int(num)))
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