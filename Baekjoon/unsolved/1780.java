import java.io.BufferedReader;
import java.io.InputStreamReader;

class Main {
    static int[] count = new int[3];

    static class Board {
        int size;
        int[][] arr;
        int isPlain;

        public Board[] childs = new Board[9];

        Board(int size, int[][] arr) {
            this.size = size;
            this.arr = arr;
        }

        Integer scanning() {
            int startType = arr[0][0];
            if (size == 1)
                return startType;
            int s = size / 3;
            int[][] starts = {
                    { 0, 0 }, { 0, s }, { 0, s * 2 },
                    { s, 0 }, { s, s }, { s, s * 2 },
                    { s * 2, 0 }, { s * 2, s }, { s * 2, s * 2 } };
            Integer[] types = new Integer[9];
            for (int i = 0; i < 9; i++) {
                int[][] newArr = makeSquareArr(s);
                int[] rc = starts[i];
                types[i] = arr[rc[0]][rc[1]];
                for (int j = 0; j < s; j++) {
                    for (int k = 0; k < s; k++)
                        newArr[j][k] = arr[rc[0] + j][rc[1] + k];
                }
                childs[i] = new Board(s, newArr);
            }
            for (int t : types) {
                if (t != startType)
                    return null;
            }
            return startType;
        }
    }

    static int[] readLine(BufferedReader br) throws Exception {
        String[] inp = br.readLine().split(" ");
        int[] res = new int[inp.length];
        for (int i = 0; i < inp.length; i++)
            res[i] = Integer.parseInt(inp[i]);
        return res;
    }

    public static int[][] makeSquareArr(int size) {
        int[][] res = new int[size][];
        for (int i = 0; i < size; i++)
            res[i] = new int[size];
        return res;
    }

    public static void recursive(Board board) {
        Integer res = board.scanning();
        if (res == null) {
            for (Board b : board.childs)
                recursive(b);
        } else
            count[res + 1] += 1;
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[][] arr = new int[N][];
        for (int i = 0; i < N; i++)
            arr[i] = readLine(br);
        Board board = new Board(N, arr);
        recursive(board);
        for (int e : count)
            System.out.println(e);
    }
}