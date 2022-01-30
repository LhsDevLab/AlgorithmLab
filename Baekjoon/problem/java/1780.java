import java.io.BufferedReader;
import java.io.InputStreamReader;

class Main {
    static int[][] arr;
    static int[] count = new int[3];

    static boolean isPlain(int r, int c, int s) {
        int type = arr[r][c];
        for (int i = r; i < r + s; i++) {
            for (int j = c; j < c + s; j++) {
                if (arr[i][j] != type)
                    return false;
            }
        }
        return true;
    }

    static void func(int r, int c, int s) {
        if (isPlain(r, c, s)) {
            count[arr[r][c] + 1] += 1;
            return;
        } else {
            s /= 3;
            int[][] childs = {
                    { r, c }, { r + s, c }, { r + s + s, c },
                    { r, c + s }, { r + s, c + s }, { r + s + s, c + s },
                    { r, c + s + s }, { r + s, c + s + s }, { r + s + s, c + s + s }, };
            for (int[] e : childs)
                func(e[0], e[1], s);
        }
    }

    static int[] readLine(BufferedReader br) throws Exception {
        String[] inp = br.readLine().split(" ");
        int[] res = new int[inp.length];
        for (int i = 0; i < inp.length; i++)
            res[i] = Integer.parseInt(inp[i]);
        return res;
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        arr = new int[N][];
        for (int i = 0; i < N; i++)
            arr[i] = readLine(br);
        func(0, 0, N);
        for (int e : count)
            System.out.println(e);
    }
}