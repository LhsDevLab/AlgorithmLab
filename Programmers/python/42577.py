def solution(phone_book):
    phone_book.sort(key = lambda e : -len(e));
    map = {};
    for num in phone_book:
        temp = map;
        isNew = False;
        for c in num:
            if temp.get(c) == None:
                temp[c] = {};
                isNew = True;
            temp = temp[c];
        if not isNew:
            return False;
    return True;

print(solution(["119", "97674223", "1195524421"]));
print(solution(["123","456","789"]));
print(solution(["12","123","1235","567","88"]));