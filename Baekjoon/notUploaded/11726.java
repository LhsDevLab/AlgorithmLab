import java.io.BufferedReader;
import java.io.InputStreamReader;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[] dp = new int[n + 2];
        dp[0] = 1;
        dp[1] = 1;
        for (int i = 0; i < n; i++) {
            int temp = dp[i];
            dp[i + 1] += temp;
            dp[i + 2] += temp;
        }
        System.out.println(dp[n - 1] % 10007);
    }
}