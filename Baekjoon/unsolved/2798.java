import java.io.BufferedReader;
import java.io.InputStreamReader;

class Main {
    static int[] NM;
    static int[] nums;
    static int answer = 0;
    static int[] readLine(BufferedReader br) throws Exception{
        String[] inp = br.readLine().split(" ");
        int[] res = new int[inp.length];
        for (int i=0; i<inp.length; i++)
            res[i] = Integer.parseInt(inp[i]);
        return res;
    }
    public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        NM = readLine(br);
        nums = readLine(br);
        func(0,new int[0]);
        System.out.println(answer);
	}
    static int[] push(int[] list, int num){
        int[] res = new int[list.length+1];
        for (int i=0; i<list.length;i++)
            res[i] = list[i];
        res[list.length] = num;
        return res;
    }
    static void func(int start, int[] list){
        
        if (list.length == 3){
            int temp = list[0]+list[1]+list[2];
            if (temp <= NM[1] && NM[1]-answer > NM[1]-temp)
                answer = temp;
        }
        for (int i=start; i<NM[0]; i++)
            func(i+1,push(list, nums[i]));
    }
}