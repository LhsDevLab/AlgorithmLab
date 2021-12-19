def isCorrect(str):
    stack = []
    for c in str:
        if c in ['(','[']:
            stack.append(c)
        elif c == ')' and (len(stack) == 0 or stack.pop() != '('):
            return 'no'
        elif c == ']' and (len(stack) == 0 or stack.pop() != '['):
            return 'no'
    if len(stack) == 0:
        return 'yes'
    return 'no'
str = ''
while True:
    str += input()
    if str == '.':
        break;
    if str[-1] == '.':
        print(isCorrect(str))
        str = ''