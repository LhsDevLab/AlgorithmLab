let LinkedList = {
    make : function(){
        return {
            length : 0,
            pop : function(){
                if (this.tail === undefined)
                    return undefined;
                else{
                    temp = this.tail;
                    this.tail = temp.f;
                    if (this.tail !== undefined)
                        this.tail.b = undefined;
                    else
                        this.head = undefined;
                    this.length--;
                    return temp.v;
                }
            },
            push : function(v){
                let node = {v : v};
                if (this.tail === undefined)
                    this.head = node;
                else{
                    node.f = this.tail;
                    this.tail.b = node;
                }
                this.length++;
                this.tail = node;
            },
            shift : function(){
                if (this.head === undefined)
                    return undefined;
                else{
                    temp = this.head;
                    this.head = temp.b;
                    if (this.head !== undefined)
                        this.head.f = undefined;
                    else
                        this.tail = undefined;
                    this.length--;
                    return temp.v;
                }
            },
            unshift : function(v){
                let node = {v : v};
                if (this.head === undefined)
                    this.tail = node;
                else{
                    node.b = this.head;
                    this.head.f = node;
                }
                this.length++;
                this.head = node;
            },
            toArray : function(){
                let res = [];
                let node = this.head;
                while (node != undefined){
                    res.push(node.v);
                    node = node.b;
                }
                return res;
            },
        }
    },
    from : function(src){ // not implemented yet
        if (Array.isArray(src)){
        }
    }
}
let list = LinkedList.make();
list.push(10);
console.log(list.toArray())
list.shift();
console.log(list.toArray())