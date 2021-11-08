class dualPQ:
    def __init__(self):
        self.root = None
    def popMax(self):
        if self.root == None:
            return None
        node = self.root
        parent = None
        while node.right != None:
            parent = node
            node = node.right
        if parent == None:
            self.root = node.left
        else:
            parent.right = None
            self.push(node.left)
        return node.value
    def popMin(self):
        if self.root == None:
            return None
        node = self.root
        parent = None
        while node.left != None:
            parent = node
            node = node.left
        if parent == None:
            self.root = node.right
        else:
            parent.left = None
            self.push(node.right)
        return node.value
    def push(self, node):
        if node == None :
            return
        elif self.root == None:
            self.root = node
        else:
            parent = self.root
            while True:
                if parent.value < node.value:
                    if parent.right == None:
                        parent.right = node
                        break
                    else:
                        parent = parent.right
                else:
                    if parent.left == None:
                        parent.left = node
                        break
                    else:
                        parent = parent.left