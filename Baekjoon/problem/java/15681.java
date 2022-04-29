import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;

class Main {
    static int[] count;
    static ArrayList<Integer>[] conn;

    static int[] readLine(BufferedReader br) throws Exception {
        String[] inp = br.readLine().split(" ");
        int[] res = new int[inp.length];
        for (int i = 0; i < inp.length; i++)
            res[i] = Integer.parseInt(inp[i]);
        return res;
    }

    static void DFS(int node) {
        count[node] = 1;
        for (int child : conn[node]) {
            if (count[child] != 0)
                continue;
            DFS(child);
            count[node] += count[child];
        }
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] NRQ = readLine(br);
        conn = new ArrayList[NRQ[0] + 1];
        for (int i = 1; i <= NRQ[0]; i++)
            conn[i] = new ArrayList<Integer>();
        for (int i = 1; i < NRQ[0]; i++) {
            int[] tmp = readLine(br);
            conn[tmp[0]].add(tmp[1]);
            conn[tmp[1]].add(tmp[0]);
        }
        count = new int[NRQ[0] + 1];
        DFS(NRQ[1]);
        for (int i = 0; i < NRQ[2]; i++)
            System.out.println(count[Integer.parseInt(br.readLine())]);
    }
}