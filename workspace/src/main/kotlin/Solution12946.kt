class Solution12946 {
    // 위의 가벼운 것들을 옮기고, 가장 무거운것을 다른 위치로 추가하는 방식으로
    fun solution(n: Int): Array<IntArray> {
        var answer = arrayOf<IntArray>()

        val path:MutableMap<Int, MutableMap<Int,Array<IntArray>>>
            = mutableMapOf(
                1 to mutableMapOf(
                    2 to arrayOf(intArrayOf(1,2)),
                    3 to arrayOf(intArrayOf(1,3)),
                )
            )

        fun calculNewLayer(){
            val height = path.size
            val prePath = path.get(height)!!

            path.put(height+1, mutableMapOf(
                2 to prePath.get(3)!! + intArrayOf(1,2) + intArrayOf(3,2),
                3 to prePath.get(2)!! + intArrayOf(1,3) + intArrayOf(2,3),
            ))
        }

        for (i in 1..n){
            calculNewLayer()
        }

        return path.get(n)!!.get(3)!!
    }
}