def solution(triangle):
    h = len(triangle);
    for i in range(h-2,-1,-1):
        for j in range(len(triangle[i])):
            triangle[i][j] += max(triangle[i+1][j],triangle[i+1][j+1]);
    return triangle[0][0];
tri = [];
for _ in range(int(input())):
    tri.append(list(map(int, input().split(" "))));
print(solution(tri));