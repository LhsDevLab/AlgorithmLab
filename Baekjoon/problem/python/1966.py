for _ in range(int(input())):
    N,M = map(int,input().split());
    prioritys = list(map(int, input().split()));
    arr = [(i,prioritys[i]) for i in range(N)];
    prioritys.sort();
    answer = 0;
    while len(arr) != 0:
        task = arr.pop(0);
        if prioritys[-1] == task[1]:
            prioritys.pop();
            answer += 1;
            if task[0] == M:
                print(answer);
                break;
        else:
            arr.append(task);