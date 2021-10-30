import sys

N = int(sys.stdin.readline());
nums = list(map(int,sys.stdin.readline().split(' ')));
nums.sort();

res = 0;
for i in range(N):
    res += nums[i]*(N-i);
print(res);