import java.io.BufferedReader;
import java.io.InputStreamReader;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] inp = br.readLine().split(" ");
        int N = Integer.parseInt(inp[0]);
        int[] arr = { 1, 1 };
        for (int i = 1; i < N; i++) {
            int[] next = new int[arr.length + 1];
            for (int j = 0; j < arr.length; j++) {
                next[j] += arr[j];
                next[j + 1] += arr[j];
            }
            arr = next;
        }
        System.out.println(arr[Integer.parseInt(inp[1])]);
    }
}