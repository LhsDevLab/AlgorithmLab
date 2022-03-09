#f(a+b) = f(a)*f(b-1)+f(a+1)*f(b)
n = int(input());
f = dict();
f[0] = 0;
f[1] = 1;
f[2] = 1;
f[3] = 2;
