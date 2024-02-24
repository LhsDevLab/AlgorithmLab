import java.util.*

class Solution {
    fun solution(n: Int): Array<IntArray> {
        var answer = arrayOf<IntArray>()

        val path:MutableMap<Int, MutableMap<Pair<Int,Int>,Array<IntArray>>>
                = mutableMapOf(
            1 to mutableMapOf(
                Pair(1,2) to arrayOf(intArrayOf(1,2)),
                Pair(1,3) to arrayOf(intArrayOf(1,3)),
                Pair(2,1) to arrayOf(intArrayOf(2,1)),
                Pair(2,3) to arrayOf(intArrayOf(2,3)),
                Pair(3,1) to arrayOf(intArrayOf(3,1)),
                Pair(3,2) to arrayOf(intArrayOf(3,2)),
            )
        )

        fun calculNewLayer(){
            val height = path.size
            val prePath = path.get(height)!!

            path.put(height+1, mutableMapOf(
                Pair(1,2) to prePath.get(Pair(1,3))!! + arrayOf(intArrayOf(1,2)) + prePath.get(Pair(3,2))!!,
                Pair(1,3) to prePath.get(Pair(1,2))!! + arrayOf(intArrayOf(1,3)) + prePath.get(Pair(2,3))!!,
                Pair(2,1) to prePath.get(Pair(2,3))!! + arrayOf(intArrayOf(2,1)) + prePath.get(Pair(3,1))!!,
                Pair(2,3) to prePath.get(Pair(2,1))!! + arrayOf(intArrayOf(2,3)) + prePath.get(Pair(1,3))!!,
                Pair(3,1) to prePath.get(Pair(3,2))!! + arrayOf(intArrayOf(3,1)) + prePath.get(Pair(2,1))!!,
                Pair(3,2) to prePath.get(Pair(3,1))!! + arrayOf(intArrayOf(3,2)) + prePath.get(Pair(1,2))!!,
            ))
        }

        for (i in 1..n){
            calculNewLayer()
        }

        return path.get(n)!!.get(Pair(1,3))!!
    }
}

fun main(args: Array<String>) {
    val mySol = Solution()
    val input = 3
    val res = mySol.solution(input);
    println(Arrays.deepToString(res))
}
