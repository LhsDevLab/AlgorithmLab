import java.io.BufferedReader;
import java.io.InputStreamReader;

class Main {
    static int[] readLine(BufferedReader br) throws Exception {
        String[] inp = br.readLine().split(" ");
        int[] res = new int[inp.length];
        for (int i = 0; i < inp.length; i++)
            res[i] = Integer.parseInt(inp[i]);
        return res;
    }
    static String[] parse(int size, int[] arr){
        String[] res = new String[arr.length];
        for (int i=0; i<arr.length; i++)
            res[i] = String.format("%"+size+"d", arr[i]);
        return res;
    }
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] I = readLine(br);
        Mover mover = new Mover();
        I[2] -= I[0]; mover.pos[0] -= I[0]; I[0] = 0;
        I[3] -= I[1]; mover.pos[1] -= I[1]; I[1] = 0;
        int remain = (I[2]-I[0]+1)*(I[3]-I[1]+1);
        int[][] answer = new int[I[2]+1][I[3]+1];
        int size = 0;
        while (remain != 0){
            int r = mover.pos[0];
            int c = mover.pos[1];
            if (r >= 0 && r <= I[2] && c >= 0 && c <= I[3]){
                answer[r][c] = mover.num;
                size = mover.num;
                remain -= 1;
            }
            mover.move();
        }
        size = (int)( Math.log10(size)+1);
        for (int[] e : answer)
            System.out.println(String.join(" ", parse(size, e)));
    }
    static class Mover{
        int[] pos = {0,0}; 
        int num = 1;
        int dir = -1;
        int[][] dirSet = {{0,1},{1,0},{0,-1},{-1,0}};
        int size = 0;
        int countDown = 0;
        void move(){
            if (dir == -1){
                pos[1] += 1;
                dir = 3;
                size += 2;
                countDown = size-1;
            }else{
                pos[0] += dirSet[dir][0];
                pos[1] += dirSet[dir][1];
                countDown -= 1;
                if (countDown == 0){
                    dir -= 1;
                    countDown = size;
                }
            }
            num += 1;
        }
    }
}