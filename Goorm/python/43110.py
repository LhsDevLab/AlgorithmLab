user_input = list(input())
res = ''

while len(user_input) > 1:
    res += user_input.pop(0)+user_input.pop();

print(res+''.join(user_input))
