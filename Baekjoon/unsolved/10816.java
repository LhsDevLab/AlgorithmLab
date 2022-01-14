import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;

class Main {
    static HashMap<Integer,Integer> map;
    static int[] readLine(BufferedReader br) throws Exception{
        String[] inp = br.readLine().split(" ");
        int[] res = new int[inp.length];
        for (int i=0; i<inp.length; i++)
            res[i] = Integer.parseInt(inp[i]);
        return res;
    }
    static void countUp(int key){
        if (map.containsKey(key))
            map.put(key,map.get(key)+1);
        else
            map.put(key,1);
    }
    public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        map = new HashMap<Integer,Integer>();
        br.readLine();//N
        for (int key : readLine(br)){    
            if (map.containsKey(key))
                map.put(key,map.get(key)+1);
            else
                map.put(key,1);
        }
        br.readLine();//M
        String answer = "";
        for (int key : readLine(br))
            answer += (map.containsKey(key) ? map.get(key) : 0) + " ";
        System.out.println(answer.trim());
	}
}