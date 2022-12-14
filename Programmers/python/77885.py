def solution(numbers):
    answer = []
    for num in numbers:
        num = list("0"+str(bin(num)[2:]));
        idx = len(num) -1;
        while True:
            if num[idx] == "0" :
                num[idx] = "1";
                break;
            idx -= 1;
        idx += 1;
        while idx < len(num):
            if num[idx] == "1":
                num[idx] = "0";
                break;
            idx += 1;
        answer.append(int(''.join(num),2));
    return answer;