h,m = map(int, input().split());
m = (h*60 + m + int(input()))%1440;
print(m//60, m%60);