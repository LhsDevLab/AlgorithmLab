import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;

class Main {
    static int[] readLine(BufferedReader br) throws Exception{
        String[] inp = br.readLine().split(" ");
        int[] res = new int[inp.length];
        for (int i=0; i<inp.length; i++)
            res[i] = Integer.parseInt(inp[i]);
        return res;
    }
    public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] count = new int[20000001];
        br.readLine();//N
        for (int n : readLine(br))
            count[n+10000000] += 1;
        br.readLine();//M
        ArrayList<String> answer = new ArrayList<String>();
        for (int key : readLine(br))
            answer.add(count[key+10000000]+"");
        
        System.out.println(String.join(" ", answer.toArray(new String[0])));
	}
}