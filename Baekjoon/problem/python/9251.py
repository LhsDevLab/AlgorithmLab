A,B = input(),input();
s = len(B);
dp = [0]*(s+1);
for a in A:
    next = [0]*(s+1);
    for i in range(s):
        if B[i] == a:
            next[i] = dp[i-1]+1;
        else:
            next[i] = max(next[i-1],dp[i]);
    dp = next;
print(dp[s-1]);