import sys
input = open("input2.txt","r")

T = int(input.readline())

class MMheap:
    
    def __init__(self):
        pass
    function PUSH-DOWN(h, i):
        if i is on a min level then:
            PUSH-DOWN-MIN(h, i)
        else:
            PUSH-DOWN-MAX(h, i)
        endif
        
    def push_down_max(h, i):
        if i has children then:
            m := index of the largest child or grandchild of i
            if m is a grandchild of i then:
                if h[m] > h[i] then:
                    swap h[m] and h[i]
                    if h[m] < h[parent(m)] then:
                        swap h[m] and h[parent(m)]
                    endif
                    PUSH-DOWN-MAX(h, m)
                endif
            else if h[m] > h[i] then:
                swap h[m] and h[i]
            endif 
        endif
    
    function PUSH-DOWN-MIN-ITER(h, m):
    while m has children then:
        i := m
        m := index of the smallest child or grandchild of i
        if h[m] < h[i] then:
            if m is a grandchild of i then:
                swap h[m] and h[i]
                if h[m] > h[parent(m)] then:
                    swap h[m] and h[parent(m)]
                endif
            else
                swap h[m] and h[i]
            endif
        else
            break 
        endif 
    endwhile
    function PUSH-UP(h, i):
    if i is not the root then:
        if i is on a min level then:
            if h[i] > h[parent(i)] then:
                swap h[i] and h[parent(i)]
                PUSH-UP-MAX(h, parent(i))
            else:
                PUSH-UP-MIN(h, i)
            endif
        else:
            if h[i] < h[parent(i)] then:
                swap h[i] and h[parent(i)]
                PUSH-UP-MIN(h, parent(i))
            else:
                PUSH-UP-MAX(h, i)
            endif
        endif
    endif
    function PUSH-UP-MIN(h, i):
    if i has a grandparent and h[i] < h[grandparent(i)] then:
        swap h[i] and h[grandparent(i)]
        PUSH-UP-MIN(h, grandparent(i))
    endif
    function PUSH-UP-MAX(h, i):
    if i has a grandparent and h[i] > h[grandparent(i)] then:
        swap h[i] and h[grandparent(i)]
        PUSH-UP-MAX(h, grandparent(i))
    endif
    function PUSH-UP-MIN-ITER(h, i):
    while i has a grandparent and h[i] < h[grandparent(i)] then:
        swap h[i] and h[grandparent(i)]
        i := grandparent(i)
    endwhile

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