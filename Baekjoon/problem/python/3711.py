for _ in range(int(input())):
    arr = [];
    for _ in range(int(input())):
        arr.append(int(input()));
    res = len(arr);
    while True:
        s = set();
        for e in arr:
            if e%res in s:
                res += 1;
                break;
            s.add(e%res);
        else:
            break;
    print(res);