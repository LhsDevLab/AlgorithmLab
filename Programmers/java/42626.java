import java.util.PriorityQueue;

class App {
    public static void main(String[] args) throws Exception {
        int[] temp = {1, 2, 3, 9, 10, 12};
        System.out.println(solution(temp,7));
	}
    static int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> PQ = new PriorityQueue<Integer>();

        for(int e : scoville)
            PQ.add(e);

        while(true){
            Integer a=PQ.poll(), b= PQ.poll();
            if (a >= K)
                break;
            else if (a == null || b == null)
                return -1;
            PQ.add(a+(b*2));
            answer += 1;
        }

        return answer;
    }
}