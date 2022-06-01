def toSec(S):
    a,b,c = map(int, S.split(':'));
    return a*3600 + b*60 + c;

A,B = toSec(input()), toSec(input());
diff = (B-A+86400)%86400;
def f(div):
    global diff;
    res = str(diff//div);
    diff %= div;
    return res if len(res) == 2 else "0"+res;

print(":".join([f(3600), f(60), f(1)]));