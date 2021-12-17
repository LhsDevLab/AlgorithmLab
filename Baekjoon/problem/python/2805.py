import math;
N,M = map(int, input().split());
trees = list(map(int,input().split()));
trees.sort(reverse=True);
currentTop = trees[0];
total = 0;
for i in range(1,len(trees)):
    total += (currentTop-trees[i])*i;
    if M < total:
        print(math.floor((total-M)/i)+trees[i]);
        break;
    else:
        currentTop = trees[i];
else:
    print(trees[-1]-math.ceil((M-total)/len(trees)));