A,B = map(lambda e : list(map(int, e)), input().split())
A,B = (A,B) if len(A) > len(B) else (B,A);
res = [];
for _ in range(len(A)-len(B)):
    res.append(A.pop(0));
for i in range(len(B)):
    res.append(A[i]+B[i]);
print("".join(map(str,res)))