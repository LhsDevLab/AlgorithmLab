import java.io.*;
import java.util.Arrays;

public class Main {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    final static int MAX = 100000;

    public static void main(String[] args) throws Exception {

        int TC = Integer.parseInt(br.readLine());
        for (int i = 0; i < TC; i++) {
            System.out.println(func1() ? "YES" : "NO");
        }
    }

    public static boolean func1() throws Exception {
        String[] input = br.readLine().split(" ");
        int N = Integer.parseInt(input[0]);
        int M = Integer.parseInt(input[1]);
        int W = Integer.parseInt(input[2]);
        int[][] edges = new int[N + 1][];
        for (int i = 1; i < N + 1; i++) {
            edges[i] = new int[N + 1];
            Arrays.fill(edges[i], MAX);
            edges[i][i] = 0;
        }
        for (int i = 0; i < M; i++) {
            input = br.readLine().split(" ");
            int S = Integer.parseInt(input[0]);
            int E = Integer.parseInt(input[1]);
            int T = Integer.parseInt(input[2]);
            if (edges[S][E] > T)
                edges[S][E] = T;
            if (edges[E][S] > T)
                edges[E][S] = T;
        }
        for (int i = 0; i < W; i++) {
            input = br.readLine().split(" ");
            int S = Integer.parseInt(input[0]);
            int E = Integer.parseInt(input[1]);
            int T = Integer.parseInt(input[2]);
            if (edges[S][E] > -T)
                edges[S][E] = -T;
        }
        return F_W(edges, N);
    }

    public static boolean F_W(int[][] edges, int N) {
        for (int i = 1; i <= N; i++)
            if (edges[i][i] < 0)
                return true;
        for (int u = 0; u <= N; u++) {
            boolean isDirty = false;
            for (int node = 1; node <= N; node++) {
                for (int i = 1; i <= N; i++) {
                    if (i == node)
                        continue;
                    for (int j = 1; j <= N; j++) {
                        if (j == node)
                            continue;
                        else if (edges[i][j] > edges[i][node] + edges[node][j]) {
                            if (i == j)
                                return true;
                            edges[i][j] = edges[i][node] + edges[node][j];
                            isDirty = true;
                        }
                    }
                }
            }
            if (isDirty == false)
                return false;
        }
        return true;
    }
}