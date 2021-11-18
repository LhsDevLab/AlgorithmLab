import sys

string = sys.stdin.readline().strip().upper()
count = dict()
for c in string:
    if count.get(c) == None:
        count[c] = 1
    else:
        count[c] += 1
keys = list(count.keys())
max = []
if len(keys) != 0:
    max = [keys.pop()]
for key in keys:
    if count[max[0]] < count[key]:
        max = [key]
    elif count[max[0]] == count[key]:
        max.append(key)
print("?" if len(max) != 1 else max[0])