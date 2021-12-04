string = input()
res = ''
for c in range(ord('a'),ord('z')+1):
    res += str(string.find(chr(c)))+' '
print(res.strip())