import java.io.*;
import java.util.ArrayList;
import java.util.Stack;
class App {
    static int N;
    static ArrayList<ArrayList<Integer>> board = new ArrayList<ArrayList<Integer>>();
    static ArrayList<ArrayList<Integer>> minPath = new ArrayList<ArrayList<Integer>>();
    static Stack<int[]> stack = new Stack<int[]>();
    public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
		for(int i=0; i<N; i++){
			String[] temp = br.readLine().split(" ");
            board.add(new ArrayList<Integer>());
			for(String e : temp)
				board.get(i).add(Integer.parseInt(e));
		}
        for(int i=0; i<N; i++){
            minPath.add(new ArrayList<Integer>());
			for(int j=0; j<N; j++)
                minPath.get(i).add(Integer.MAX_VALUE);
		}
        add(0,0,0);
        while(stack.size() > 0){
            int[] node = stack.pop();
            int row = node[0]; int col = node[1];
            add(row+1,col, minPath.get(row).get(col));
            add(row-1,col, minPath.get(row).get(col));
            add(row,col+1, minPath.get(row).get(col));
            add(row,col-1, minPath.get(row).get(col));
        }
        System.out.println(minPath.get(N-1).get(N-1));
	}
    static void add(int row, int col, int num){
        if (isValid(row, col)){
            if (minPath.get(row).get(col) > num+1){
                minPath.get(row).set(col, num+1);
                int[] temp = {row,col};
                stack.add(temp);
            }
        }
    }
    static Boolean isValid(int row, int col){
        if (row >= N || row <0 || col >= N || col <0 || board.get(row).get(col) == 0){
            return false;
        }
        return true;
    }
    static void print(ArrayList<ArrayList<Integer>> board){
        for(int i=0; i<N; i++){
            for(int j=0; j<N; j++){
                System.out.printf("%d ",board.get(i).get(j));
            }
            System.out.println();
        }
    }
}