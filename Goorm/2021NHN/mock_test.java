import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Stack;

public class App {
    public static void main(String[] args) throws Exception {
        int[][] arr = {{0,1,1,0,0,0},{0,1,1,0,1,1},{0,0,0,0,1,1},{0,0,0,0,1,1},{1,1,0,0,1,0},{1,1,1,0,0,0}};
        solution(6,arr);
    }
    static int count = 0;
    static List<Integer> sizes = new ArrayList<Integer>();
    static int size = 0;
    static int[][] board;
    private static void solution(int sizeOfMatrix, int[][] matrix){
        size = sizeOfMatrix;
        board = matrix;
        for(int i=0; i<sizeOfMatrix ; i++){
            for(int j=0; j<sizeOfMatrix; j++){
                if (matrix[i][j] == 1){
                    sizes.add(processArea(i,j));
                    count += 1;
                }
            }
        }
        System.out.println(count);
        sizes.sort(Comparator.naturalOrder());
        for(int e : sizes){
            System.out.printf("%d ",e);
        }
    }
    static Boolean check(int row, int col){
        if (row >= size || row < 0 || col >= size || col < 0 || board[row][col] == 0)
            return false;
        return true;
    }
    static int[] makePos(int row, int col){
        int[] temp = {row,col};
        return temp;
    }
    static int processArea(int row,int col){
        int res = 0;
        Stack<int[]> stack = new Stack<>();
        board[row][col] = 0;
        stack.push(makePos(row,col));
        while(stack.size() != 0){
            int[] node = stack.pop();
            res += 1;

            if (check(node[0]+1,node[1])){
                board[node[0]+1][node[1]] = 0;
                stack.push(makePos(node[0]+1,node[1]));
            }
            if (check(node[0],node[1]+1)){
                board[node[0]][node[1]+1] = 0;
                stack.push(makePos(node[0],node[1]+1));
            }
            if (check(node[0]-1,node[1])){
                board[node[0]-1][node[1]] = 0;
                stack.push(makePos(node[0]-1,node[1]));
            }
            if (check(node[0],node[1]-1)){
                board[node[0]][node[1]-1] = 0;
                stack.push(makePos(node[0],node[1]-1));
            }
        }
        return res;
    }
}