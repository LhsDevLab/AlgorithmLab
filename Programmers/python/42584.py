def solution(prices):
    answer = [0 for _ in prices];
    stack = [];
    for i in range(len(prices)):
        p = prices[i];
        while len(stack)!= 0 and stack[-1][1] > p:
            j = stack.pop()[0];
            answer[j] = i-j;
        stack.append((i,p));
    for i,_ in stack:
        answer[i] = len(prices)-i-1;
    return answer;
print(solution([1, 2, 3, 2, 3]));