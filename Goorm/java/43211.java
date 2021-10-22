import java.io.*;
import java.util.ArrayList;
import java.util.Stack;

class App {
    static int N,M;
    static Node[] nodes;
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine();
        String[] temp = input.split(" ");
        N = Integer.parseInt(temp[0]); M = Integer.parseInt(temp[1]);
        nodes = new Node[N];
        for(int i=0; i<N; i++)
        nodes[i] = new Node();
        for(int i=0; i<M; i++){
            input = br.readLine(); temp = input.split(" ");
            int a = Integer.parseInt(temp[0])-1;
            int b = Integer.parseInt(temp[1])-1;
            int v = Integer.parseInt(temp[2]);
            nodes[a].add(b,v);
            nodes[b].add(a,v);
        }
        d_algo(Integer.parseInt(br.readLine())-1);
	}
    static class Node{
        ArrayList<int[]> list = new ArrayList<int[]>();
        Node(){}
        void add(int node, int value){
            int[] temp = {node,value};
            list.add(temp);
        }
    }
    static void d_algo(int start){
        int[] minCost = new int[N];
        for(int i=0; i<N; i++)
            minCost[i] = Integer.MAX_VALUE;
        minCost[start] = 0;
        Stack<Integer> stack = new Stack<Integer>();
        stack.add(start);
        while(stack.size() > 0){
            int idx = stack.pop();
            Node node = nodes[idx];
            for(int i=0; i<node.list.size(); i++){
                int[] next = node.list.get(i);
                int temp = next[1]+minCost[idx];
                if (minCost[next[0]] > temp){
                    minCost[next[0]] = temp;
                    stack.add(next[0]);
                }
            }
        }
        for(int i=0; i<minCost.length; i++)
            System.out.printf("%d: %d\n",i+1, minCost[i]);
    }
}