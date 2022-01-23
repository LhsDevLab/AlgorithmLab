N = input();
M = input();
brokens = [];
if M != "0":
    brokens = input();
usable = list(set([str(e) for e in range(0,10) if str(e) not in brokens]));
usable.sort();
    
Upper = [None for _ in range(11)];
for i in range(10):
    for n in range(i,10):
        if str(n) not in brokens:
            Upper[i] = str(n);
            break;
Lower = [None for _ in range(11)];
for i in range(10):
    for n in range(i,-1,-1):
        if str(n) not in brokens:
            Lower[i] = str(n);
            break;
        
def getbigger(N, brokens):
    global usable;
    res = [];
    idx = 0;
    while idx < len(N):
        if N[idx] not in brokens:
            res.append(N[idx]);
        else:
            res.append(Upper[int(N[idx])]);
            idx += 1;
            break;
        idx += 1;
    while idx < len(N):
        res.append(usable[0]);
        idx += 1;
    for idx in range(len(N)-1, 0, -1):
        if res[idx] == None:
            res[idx] = usable[0];
            if (res[idx-1] != None):
                res[idx-1] = Upper[int(res[idx-1])+1];
            
    if res[0] == None:
        if len(usable) > 1 and usable[0] == '0':
            res[0] = usable[1]+usable[0];
        else:
            res[0] = usable[0]*2;
            
    return res;

def getSmall(N, brokens):
    res = [];
    idx = 0;
    while idx < len(N):
        if N[idx] not in brokens:
            res += [N[idx]];
        else:
            res += [Lower[int(N[idx])]];
            idx += 1;
            break;
        idx += 1;
    while idx < len(N):
        res += [usable[-1]];
        idx += 1;
    for idx in range(len(N)-1, 0, -1):
        if res[idx] == None:
            res[idx] = usable[-1];
            if (res[idx-1] != None):
                res[idx-1] = Lower[int(res[idx-1])-1];
    if res[0] == None:
        res.pop(0);
    return res;

answers = [abs(int(N)-100)];
if len(usable) != 0:
    big = int("".join(getbigger(N, brokens)));
    answers.append(abs(int(N)-big)+len(str(big)));
    small = getSmall(N, brokens);
    if len(small) != 0:
        small = int("".join(small));
        answers.append(abs(int(N)-small)+len(str(small)));
print(min(answers));