import math;

R,C,T = map(int, input().split());
purifier = None;
room = [];

def isValid(r,c):
    global room;
    try:
        if r >= 0 and c >= 0 and room[r][c] != -1:
            return True;
    except: 
        pass;
    return False;
    

for i in range(R):
    room.append(list(map(int, input().split())));
    if purifier == None and room[-1][0] == -1:
        purifier = (i,0);

for _ in range(T):
    preSum = [[0 for _ in range(C)] for _ in range(R)];
    for i in range(R):
        for j in range(C):
            if room[i][j] > 0:
                share = math.floor(room[i][j]/5);
                arr = [(i+1,j),(i-1,j),(i,j+1),(i,j-1)];
                for r,c, in arr:
                    if isValid(r,c): 
                        preSum[r][c] += share;
                        preSum[i][j] += -share;
    for i in range(R):
        for j in range(C):
            room[i][j] += preSum[i][j];
        
    store = 0;
    wind = purifier[0],purifier[1]+1;
    dirset = [(0,1),(-1,0),(0,-1),(1,0)];
    for dir in dirset:
        while True:
            r,c = wind[0]+dir[0],wind[1]+dir[1];
            if isValid(r,c) == False:
                break;
            temp = room[wind[0]][wind[1]];
            room[wind[0]][wind[1]] = store;
            store = temp;
            wind = r,c;
    room[wind[0]][wind[1]] = store;
    store = 0;
    wind = purifier[0]+1,purifier[1]+1;
    dirset = [(0,1),(1,0),(0,-1),(-1,0)];
    for dir in dirset:
        while True:
            r,c = wind[0]+dir[0],wind[1]+dir[1];
            if isValid(r,c) == False:
                break;
            temp = room[wind[0]][wind[1]];
            room[wind[0]][wind[1]] = store;
            store = temp;
            wind = r,c;
    room[wind[0]][wind[1]] = store;

answer = 0;
for row in room:
    for e in row:
        answer += e;
print(answer+2);