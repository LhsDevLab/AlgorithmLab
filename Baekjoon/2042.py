class segmentTree:
    @staticmethod
    def childs(idx): return idx*2+1, idx*2+2;
    @staticmethod
    def parent(idx): return (idx-1)//2;
    
    def __init__(self,arr):
        size = len(arr);
        self.tree = [None]*(size*2-1);
        def f(s,e,idx):
            a,b = segmentTree.childs(idx);
            if (e == s):
                self.tree[idx] = arr[e];
                return arr[e];
            elif (e-s == 1):
                self.tree[idx] = f(s,s,a) + f(e, e,b);
            mid = (s+e)//2;
            self.tree[idx] = f(s,mid,a) + f(mid+1, e,b);
        f(0,size,0);
      
Stree = segmentTree([1,2,3,4,5,6,7,8]);
  
print(Stree.tree);