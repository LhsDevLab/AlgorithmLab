import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

class Main {
    static HashMap<String,Integer>[] map = new HashMap[10];
    static final int MOD = 1000000000;
    public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        System.out.println(func(N));
	}
    static void addOrInit(HashMap<String,Integer>[] next, int base, String key, int preValue){
        if (next[base].containsKey(key))
            next[base].put(key, (next[base].get(key)+preValue)%MOD);
        else
            next[base].put(key, preValue);
    }
    static public HashMap<String,Integer>[] nextCase(){
        HashMap<String,Integer>[] next = new HashMap[10];
        for (int i=0; i<10; i++)
            next[i] = new HashMap<String,Integer>();
        for (int i=0; i<10; i++){
            List<String> keys = new ArrayList<String>(map[i].keySet());
            for (String key : keys){
                int bottom = Character.getNumericValue(key.charAt(0));
                int top = Character.getNumericValue(key.charAt(1));
                if (i > 0){
                    String temp = Math.min(bottom, i-1)+""+top;
                    addOrInit(next, i-1 ,temp, map[i].get(key));
                }
                if (i<9){
                    String temp = bottom+""+Math.max(top, i+1);
                    addOrInit(next, i+1 ,temp, map[i].get(key));
                }
            }
        }
        return next;
    }
    static int func(int N){
        map[0] = new HashMap<String,Integer>();
        for (int i=1; i<10; i++){
            map[i] = new HashMap<String,Integer>();
            map[i].put(i+""+i,1);
        }
        for (int i=0; i<N-1; i++)
            map = nextCase();
        int answer = 0;
        for (HashMap e : map){
            List<String> keys = new ArrayList<String>(e.keySet());
            for (String key : keys){
                if (key.equals("09"))
                    answer = (answer+(int)e.get(key))%MOD;
            }
        }
        return answer;
    }
}