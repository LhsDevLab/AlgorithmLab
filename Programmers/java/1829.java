import java.util.Arrays;
import java.util.Stack;

class App {
    static Stack<int[]> stack = new Stack<int[]>();
    static int M;
    static int N;
    static int[][] Pic;
    public static void main(String[] args) throws Exception {
        int[][] temp = {{1, 1, 1, 0}, {1, 2, 2, 0}, {1, 0, 0, 1}, {0, 0, 0, 1}, {0, 0, 0, 3}, {0, 0, 0, 3}};
        System.out.println(Arrays.toString(solution(6,4,temp)));
	}
    static public int[] solution(int m, int n, int[][] picture) {
        M = m; N = n;
        Pic = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                Pic[i][j] = picture[i][j];
            }
        }
        int numberOfArea = 0;
        int maxSizeOfOneArea = 0;

        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                if (Pic[i][j] != 0){
                    int res = processArea(i,j,Pic[i][j]);
                    numberOfArea += 1;
                    if (maxSizeOfOneArea < res)
                        maxSizeOfOneArea = res;
                }
            }
        }

        int[] answer = new int[2];
        answer[0] = numberOfArea;
        answer[1] = maxSizeOfOneArea;
        return answer;
    }
    static int processArea(int row, int col, int color){
        int res = 0;
        add(row,col,color);
        while(stack.size() > 0){
            int[] pos = stack.pop();
            add(pos[0]+1,pos[1],color);
            add(pos[0]-1,pos[1],color);
            add(pos[0],pos[1]+1,color);
            add(pos[0],pos[1]-1,color);
            res += 1;
        }
        return res;
    }
    static void add(int row, int col, int color){
        if (!(row>=M || row<0 || col>=N || col<0 || Pic[row][col] != color)){
            int[] temp = {row,col};
            stack.add(temp);
            Pic[row][col] = 0;
        }
    }
}