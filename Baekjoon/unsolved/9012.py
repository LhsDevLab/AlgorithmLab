for _ in range(int(input())):
    inp = input();
    count = 0;
    res = "YES";
    for c in inp:
        if c == '(': 
            count += 1;
        else: 
            if count == 0:
                res = "NO";
                break;
            count -= 1;
    if count > 0:
        res = "NO";
    print(res);