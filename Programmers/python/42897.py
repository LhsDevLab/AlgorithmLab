def solution(money):
    case1 = [0,0];
    case2 = [money[0],0];
    for e in money[1:]:
        ifuse, ifnot = case1;
        case1[0] = ifnot+e;
        case1[1] = max(ifuse,ifnot);
        ifuse, ifnot = case2;
        case2[0] = ifnot+e;
        case2[1] = max(ifuse,ifnot);
    return max(case1[0],case1[1],case2[1]);

print(solution([1, 2, 3, 1]));
print(solution([1, 3, 2, 1]));