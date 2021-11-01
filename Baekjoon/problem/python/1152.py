import sys
str = sys.stdin.readline().lstrip().rstrip();
print(0 if len(str) == 0 else len(str.split(' ')))