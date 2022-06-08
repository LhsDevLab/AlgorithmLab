def get():
    res = int(input());
    return 40 if res < 40 else res;
print(int((get()+get()+get()+get()+get())/5));