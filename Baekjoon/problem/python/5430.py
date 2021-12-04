pops = dict()
pops[-1] = lambda e : e.pop(0)
pops[1] = lambda e : e.pop()

T = int(input())
for _ in range(T):
    string = input()
    N = input()
    nums = input().strip('[]')
    if N != '0':
        nums = list(map(int, nums.split(',')))
    else:
        nums = []
    dir = -1
    for c in string:
        if c == 'R':
            dir *= -1
        else:
            try:
                pops[dir](nums)
            except:
                nums = None;
                break;
    if nums == None:
        print('error')
    else:
        if dir == 1:
            nums = nums[::-1]
        nums = map(str,nums)
        print('['+','.join(nums)+']')