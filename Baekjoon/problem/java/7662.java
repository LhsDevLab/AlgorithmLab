import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.PriorityQueue;
import java.util.HashMap;

class App {
    static BufferedReader br;
    static int[] parents;
    static int[] depths;
	public static void main(String[] args) throws Exception {
        br = new BufferedReader(new FileReader(new File("input.txt")));
        long T = Long.parseLong(br.readLine());
        for (int i=0; i<T; i++)
            solution();
    }
    static void solution() throws IOException{
        long N = Long.parseLong(br.readLine());
        dualQueue queue = new dualQueue();
        for(int i=0; i<N; i++){
            String[] input = br.readLine().split(" ");
            long value = Long.parseLong(input[1]);
            if (input[0].equals("I"))
                queue.put(value);
            else{
                if (value == 1)
                    queue.getMax();
                else
                    queue.getMin();
            }
        }
        String max = queue.getMax();
        String min = queue.getMin();
        if (max == "")
            System.out.println("EMPTY");
        else{
            if (min == "")
                min = max;
            System.out.println(max+" "+min);
        }
        
    }
    static long[] readlonglist(){
        String[] temp = null;
        try{
            temp = br.readLine().split(" ");
        }catch(Exception e){};
        long[] res = new long[temp.length];
        for(int i=0; i<temp.length; i++)
            res[i] = Long.parseLong(temp[i]);
        return res;
    }
    static class dualQueue{
        PriorityQueue<Long> maxQueue = new PriorityQueue<Long>();
        PriorityQueue<Long> minQueue = new PriorityQueue<Long>();
        HashMap<Long,Long> count = new HashMap<Long,Long>();
        dualQueue(){}
        String getMax(){
            while (!maxQueue.isEmpty()){
                long temp = -maxQueue.poll();
                if (count.get(temp) != 0){
                    count.put(temp, count.get(temp)-1);
                    return ""+temp;
                }
            }
            return "";
        }
        String getMin(){
            while (!minQueue.isEmpty()){
                long temp = minQueue.poll();
                if (count.get(temp) != 0){
                    count.put(temp, count.get(temp)-1);
                    return ""+temp;
                }
            }
            return "";
        }
        void put(long value){
            minQueue.add(value);
            maxQueue.add(-value);
            if (count.containsKey(value))
                count.put(value, count.get(value)+1);
            else
                count.put(value, (long)1);
        }
    }
}