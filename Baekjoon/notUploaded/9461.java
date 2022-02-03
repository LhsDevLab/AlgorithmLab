import java.io.BufferedReader;
import java.io.InputStreamReader;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        long[] P = new long[101];
        P[1] = 1;
        P[2] = 1;
        P[3] = 1;
        for (int i = 4; i <= 100; i++)
            P[i] = P[i - 2] + P[i - 3];
        int TC = Integer.parseInt(br.readLine());
        for (int i = 0; i < TC; i++)
            System.out.println(P[Integer.parseInt(br.readLine())]);
    }
}