N = int(input());
paper = [list(map(int,input().split())) for _ in range(N)];
count = [0,0];
stack = [(0,0,N)];
def isPlain(r,c,s,type):
    global paper;
    for i in range(r,r+s):
        for j in range(c,c+s):
            if paper[i][j] != type:
                return False;
    return True;
while len(stack) != 0:
    r,c,s = stack.pop();
    s = int(s/2);
    type = paper[r][c];
    childs = [(r,c),(r+s,c),(r,c+s),(r+s,c+s)];
    for r,c in childs:
        if not isPlain(r,c,s,type):
            stack.extend(list(map(lambda e: e+tuple([s]),childs)));
            break;
    else:
        count[type] += 1;
print(count);