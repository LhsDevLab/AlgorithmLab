def ExGCD(a,b):
    pre = 1,0,a;
    cur = 0,1,b;
    while True:
        q = pre[2]//cur[2];
        next = pre[0]-cur[0]*q,pre[1]-cur[1]*q,pre[2]%cur[2];
        if next[2] == 0:
            return cur;
        pre = cur;
        cur = next;