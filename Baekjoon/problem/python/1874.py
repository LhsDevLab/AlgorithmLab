N = int(input());
num = 1;
stack = [0];
answer = "";
def push():
    global num;
    global stack;
    global answer;
    stack.append(num);
    num += 1;
    answer += "+\n";
    
def pop():
    global stack;
    global answer;
    answer += '-\n';
    return stack.pop();

for _ in range(N):
    n = int(input());
    while n > stack[-1]:
        push();
    if pop() != n:
        answer = 'NO';
        break;
print(answer);