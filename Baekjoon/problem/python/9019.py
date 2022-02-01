for _ in range(int(input())):
    A,B = map(int, input().split());
    used = set([A]);
    stack = [(A,"")];
    if A == B:
        print("");
        continue;
    while len(stack) != 0:
        num, opr = stack.pop(0);
        childs = [
            ((num*2)%10000, opr+"D"),
            ((num+9999)%10000, opr+"S"),
            ((num%1000)*10+(num//1000), opr+"L"),
            ((num%10)*1000+(num//10), opr+"R")
            ];
        for n,o in childs:
            if n == B:
                print(o);
                break;
            if n not in used :
                used.add(n);
                stack.append((n,o));
        else:
            continue;
        break;