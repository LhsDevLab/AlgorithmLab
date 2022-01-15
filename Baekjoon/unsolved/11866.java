import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;

class Main {

    static class Josephus {
        static LinkedList<Integer> list = new LinkedList<Integer>();
        static int K;

        Josephus(int N, int K) {
            this.K = K;
            for (int i = 1; i <= N; i++)
                list.add(i);
        }

        int next() {
            for (int i = 1; i < K; i++)
                list.add(list.pop());
            return list.pop();
        }

        int size() {
            return list.size();
        }
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] inp = br.readLine().split(" ");
        int n = Integer.parseInt(inp[0]);
        Josephus jose = new Josephus(n, Integer.parseInt(inp[1]));
        String[] answer = new String[n];
        for (int i = 0; i < n; i++)
            answer[i] = jose.next() + "";
        System.out.println("<" + String.join(", ", answer) + ">");
    }
}