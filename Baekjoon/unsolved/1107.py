from re import L


N = input();
M = input();
brokens = [];
if M != "0":
    brokens = input();
usable = list(set([str(e) for e in range(0,10) if str(e) not in brokens]));
usable.sort();
top = usable[0]*2;
if len(usable) > 1 and usable[0] == '0':
    top = usable[1]+usable[0];

Upper = [];
while true:

Lower = [];



#
answers = [abs(int(N)-100)];

print(min(answers));