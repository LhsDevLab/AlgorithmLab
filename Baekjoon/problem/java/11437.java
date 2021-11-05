import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Stack;

class Main {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static int[] parents;
    static int[] depths;
	public static void main(String[] args) throws Exception {
        int T = Integer.parseInt(br.readLine());
        parents = new int[T+1];
        depths = new int[T+1];
        depths[1] = 1;
        ArrayList<Integer>[] links = new ArrayList[T+1];
        for(int i=0; i<=T; i++)
            links[i] = new ArrayList<Integer>();
        for(int i=0; i<T-1; i++){
            int[] temp = readIntlist();
            links[temp[0]].add(temp[1]);
            links[temp[1]].add(temp[0]);
        }
        Stack<Integer> stack = new Stack<Integer>();
        stack.push(1);
        while(true){
            int node = stack.pop();
            for(int child : links[node]){
                if (parents[node] != child){
                    stack.push(child);
                    parents[child] = node;
                    depths[child] = depths[node]+1;
                }
            }
            if (stack.size() == 0)
                break;
        }
        int M = Integer.parseInt(br.readLine());
        for(int i=0; i<M; i++){
            int[] temp = readIntlist();
            int min = Math.min(depths[temp[0]], depths[temp[1]]);
            temp[0] = getRoot(temp[0], min);
            temp[1] = getRoot(temp[1], min);
            while(temp[0] != temp[1]){
                temp[0] = parents[temp[0]];
                temp[1] = parents[temp[1]];
            }
            System.out.println(temp[0]);
        }
    }
    static int[] readIntlist(){
        String[] temp = null;
        try{
            temp = br.readLine().split(" ");
        }catch(Exception e){};
        int[] res = new int[temp.length];
        for(int i=0; i<temp.length; i++)
            res[i] = Integer.parseInt(temp[i]);
        return res;
    }
    static int getRoot(int node, int target){
        for(int i=depths[node]; i>target; i--)
            node = parents[node];
        return node;
    }
}