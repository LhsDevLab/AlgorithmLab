N = input();
M = input();
brokens = [];
if M != "0":
    brokens = input();
usable = list(set([str(e) for e in range(0,10) if str(e) not in brokens]));
usable.sort();
     
def getBigger(N,usable):
    if len(usable) == 0:
        return None;
    res = [usable[0]]*len(N);
    for i in range(0,len(N)):
        if N[i] in usable:
            res[i] = N[i];
            continue;
        for n in range(int(N[i])+1,10):
            n = str(n);
            if n in usable:
                res[i] = n;
                break;
        break;
    return res;

def getSmaller(N,usable):
    if len(usable) == 0:
        return None;
    res = [usable[-1]]*len(N);
    for i in range(0,len(N)):
        if N[i] in usable:
            res[i] = N[i];
            continue;
        for n in range(int(N[i])-1,-1,-1):
            n = str(n);
            if n in usable:
                res[i] = n;
                break;
        break;
    return res;

big = ''.join(getBigger(N,usable));
if int(big) < int(N):
    try:
        big = ''.join([usable[1]]+getBigger(N,usable));
    except:
        big = "100";
small = ''.join(getSmaller(N,usable));
N = int(N);
answers = [abs(N-100),
           abs(N-int(big))+len(big),
           abs(N-int(small))+len(small)];

print(min(answers));