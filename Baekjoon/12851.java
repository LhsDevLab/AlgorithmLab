import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;

class Main {
    static boolean[] visited;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");
        int N = Integer.parseInt(input[0]);
        int K = Integer.parseInt(input[1]);
        visited = new boolean[K * 2 + 1];
        int[] stack = { K };
        int count = 0;
        boolean flag = true;
        if (N >= K) {
            count = N - K;
            flag = false;
        }
        for (; flag; count += 1) {
            ArrayList<Integer> next = new ArrayList<Integer>();
            for (int e : stack) {
                if (e == N) {
                    flag = false;
                    count -= 1;
                    break;
                }
                if (e < K * 2 && !visited[e + 1]) {
                    next.add(e + 1);
                    visited[e + 1] = true;
                }
                if (e > N) {
                    if (!visited[e - 1]) {
                        next.add(e - 1);
                        visited[e - 1] = true;
                    }
                    if (e % 2 == 0 && !visited[e / 2]) {
                        next.add(e / 2);
                        visited[e / 2] = true;
                    }
                }
            }
            stack = new int[next.size()];
            for (int i = 0; i < next.size(); i++)
                stack[i] = next.get(i);
            if (stack.length == 0)
                break;
        }
        System.out.println(count);
    }
}