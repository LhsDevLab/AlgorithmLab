N = int(input());

num = 666;
def isDemonic(num):
    six = 0;
    while num != 0:
        if num%10 == 6:
            six += 1;
            if six == 3:
                return True;
        else:
            six = 0;
        num = int(num/10);
    return False;

while True:
    if isDemonic(num):
        N -= 1;
        if N == 0:
            print(num);
            break;
    num += 1;