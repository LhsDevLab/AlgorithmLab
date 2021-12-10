res = ''
stack = []

pri = {}
pri['+']=2; pri['-']=2
pri['*']=1; pri['/']=1

for c in input():
    if c not in '+-*/()':
        res += c
    elif c == ')':
        temp = stack.pop()
        while temp != '(':
            res += temp
            temp = stack.pop()
    elif c == '(':
        stack.append(c)
    else:
        while len(stack) != 0 and stack[-1] != '(' and pri[stack[-1]] <= pri[c]:
            res += stack.pop()
        stack.append(c)
        
for c in stack[::-1]:
    res += c
print(res)