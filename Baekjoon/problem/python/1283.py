regis = set(' ');
for _ in range(int(input())):
    inp = input();
    blocks = inp.split();
    for i in range(len(blocks)):
        first = blocks[i][0];
        if first.upper() not in regis:
            blocks[i] = '['+first+']'+blocks[i][1:];
            regis.add(first.upper());
            break;
    else:
        res = " ".join(blocks);
        for i in range(len(res)):
            if res[i].upper() not in regis:
                regis.add(res[i].upper())
                print(res[0:i]+"["+res[i]+"]"+res[i+1:]);
                break;
        else:
            print(res);
        continue;
    print(" ".join(blocks));
    
            