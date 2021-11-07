
function PriorityQueue(){
    const array = []
    function BottomUp(index){
        while(index != 0){
            let parent = Math.floor((index-1)/2)
            if (array[parent] < array[index])
                [array[parent],array[index]] = [array[index],array[parent]]
            index = parent
        }
    }
    function TopDown(index){
        let left = index*2
        let right = index*2+1
        while(array.length > left){
            if (array.length <= right){
                if (array[left] > array[index]){
                    [array[left],array[index]] = [array[index],array[left]]
                    index = left
                }
            }
            else{
                const larger = (array[right]>array[left]) ? right : left;
                if (array[larger] > array[index]){
                    [array[larger],array[index]] = [array[index],array[larger]]
                    index = larger
                }
            }
            left = index*2
            right = index*2+1
        }
    }
    this.getMin = ()=>{
        let index = array.length-1
        let parent = Math.floor((index-1)/2)
        let min = array[index]
        for (let i=index; i>parent; i--){
            if (min > array[i]){
                min = array[i]
                index = i
            }
        }
        return [index,min]
    }
    this.getMax = ()=> array.length == 0 ? null : array[0]
    this.enQueue = (item)=>{
        array.push(item)
        if (array.length != 1)
            BottomUp(array.length-1)
    }
    this.deQueueMax = () =>{
        if (array.length == 0) return null
        if (array.length == 1) return array.pop()
        let res = array[0]
        array[0] = array.pop()
        if (array.length != 1)
            TopDown(0)
        return res
    }
    this.deQueueMin = ()=>{
        if (array.length == 0) return null
        if (array.length == 1) return array.pop()
        let [index, min] = this.getMin()
        if (index == array.length-1) return array.pop()
        let res = min
        array[index] = array.pop()
        if (array.length != 1)
            BottomUp(index)
        return res
    }
}