N = int(input());
deck = [i for i in range(1,N+1)];
def process(deck):
    res = [deck[i] for i in range(len(deck)) if i%2==1];
    if len(deck)%2 == 1:
        res.insert(0,deck[-1]);
    return res;
while len(deck) > 1:
    deck = process(deck);
print(deck[0]);