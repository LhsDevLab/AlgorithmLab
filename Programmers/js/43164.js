function solution(tickets) {
    tickets.sort();
    let Tree = {};
    for (let [a,b] of tickets){
        if (Tree[a] == undefined)
            Tree[a] = [b];
        else
            Tree[a].push(b);
    }
    let path = ["ICN"];
    (function BFS(){
        if (path.length == tickets.length+1)
            return path;
        let list = Tree[path[path.length-1]];
        if (list === undefined)
            return false;
        for (let e of list.slice()){
            path.push(e);
            list.splice(list.indexOf(e),1);
            if (!BFS())
                list.push(path.pop());
            else
                return path;
        }
        return false;
    })();
    return path;
}