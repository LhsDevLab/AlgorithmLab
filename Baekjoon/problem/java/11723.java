import java.io.BufferedReader;
import java.io.InputStreamReader;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int M = Integer.parseInt(br.readLine());
        int[] powers = new int[21];
        final int fillAll = (1 << 21) - 1;
        for (int i = 0; i < 20; i++)
            powers[i + 1] = 1 << i;
        int set = 0;
        StringBuilder res = new StringBuilder();
        for (int i = 0; i < M; i++) {
            String[] input = br.readLine().split(" ");
            switch (input[0]) {
                case ("add"):
                    set |= powers[Integer.parseInt(input[1])];
                    break;
                case ("remove"):
                    set &= ~(powers[Integer.parseInt(input[1])]);
                    break;
                case ("check"):
                    res.append((set & powers[Integer.parseInt(input[1])]) > 0 ? "1\n" : "0\n");
                    break;
                case ("toggle"):
                    set ^= powers[Integer.parseInt(input[1])];
                    break;
                case ("all"):
                    set = fillAll;
                    break;
                case ("empty"):
                    set = 0;
                    break;
            }
        }
        System.out.println(res.toString().trim());
    }
}