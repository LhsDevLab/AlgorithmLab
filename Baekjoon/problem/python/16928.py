N,M = map(int,input().split());
move = [i for i in range(101)];
visited = [False for _ in range(101)];
visited[1] = True;  
for _ in range(N+M):
    a,b = map(int,input().split());
    move[a] = b;
stack = [1];
answer = 0;
while True:
    next = [];
    for e in stack:
        if e == 100:
            flag = False;
            break;
        for n in range(1,7):
            try:
                n = move[e+n];
                if not visited[n]:
                    next.append(n);
                    visited[n] = True;
            except:
                pass;
    else:
        stack = next;
        answer += 1;
        continue;
    break;
print(answer);