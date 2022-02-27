import java.io.BufferedReader;
import java.io.InputStreamReader;

class Main {
    static long A, B, C;

    static long[] readLine(BufferedReader br) throws Exception {
        String[] inp = br.readLine().split(" ");
        long[] res = new long[inp.length];
        for (int i = 0; i < inp.length; i++)
            res[i] = Integer.parseInt(inp[i]);
        return res;
    }

    static public long pwd(long n) {
        if (n == 0)
            return 1;
        if (n == 1)
            return A;
        long half = pwd(n / 2);
        if (n % 2 == 0)
            return half * half % C;
        return half * half % C * A % C;
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        long[] ABC = readLine(br);
        A = ABC[0];
        B = ABC[1];
        C = ABC[2];
        System.out.println(pwd(B) % C);
    }
}