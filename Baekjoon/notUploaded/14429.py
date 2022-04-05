N = int(input());
answer = [10000,-1];
for i in range(N):
    J,M = map(int, input().split());
    temp = 2*((J-1)//(M+1))+2;
    if answer[0] > temp:
        answer = [temp, i+1];
print(answer[1], answer[0]);