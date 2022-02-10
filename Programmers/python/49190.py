def solution(arrows):
    answer = 0;
    r,c = [0,0];
    dirSet = ((-1,0),(-1,1),(0,1),(1,1),(1,0),(1,-1),(0,-1),(-1,-1));
    visited = {(0,0):[False]*8};
    
    def move(dir,visited,dirSet):
        nonlocal r,c;
        nonlocal answer;
        visited[(r,c)][dir] = True;
        a,b = dirSet[dir];
        r,c = r+a,c+b;
        pos = (r,c);
        E = visited.get(pos);
        ops = (dir+4)%8;
        if E == None:
            visited[pos] = [False]*8;
            visited[pos][ops] = True;
        else:
            if E[ops] == False:
                E[ops] = True;
                answer += 1;
    for e in arrows:
        for key, val in visited.items():
            print(key, val)
        print()
        move(e,visited,dirSet);
    return answer;

print(solution([6, 6, 6, 4, 4, 4, 2, 2, 2, 0, 0, 0, 1, 6, 5, 5, 3, 6, 0]));
