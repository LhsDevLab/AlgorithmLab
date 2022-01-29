import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;

class Main {
    static class IOI {
        int max;
        char next;
        int count;

        IOI(int max) {
            this.max = max;
            next = 'O';
            count = 1;
        }

        int next(char c) {
            if (c == next) {
                count += 1;
                if (count == max)
                    return 1;
                next = c == 'I' ? 'O' : 'I';
            } else {
                return -1;
            }
            return 0;
        }
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int res = 0;
        int N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());
        String S = br.readLine();
        ArrayList<IOI> list = new ArrayList<>();
        for (int i = 0; i < M; i++) {
            ArrayList<IOI> next = new ArrayList<>();
            if (S.charAt(i) == 'I')
                next.add(new IOI(N * 2 + 1));
            for (IOI e : list) {
                int temp = e.next(S.charAt(i));
                if (temp == 1)
                    res += 1;
                else if (temp == 0)
                    next.add(e);
            }
            list = next;
        }
        System.out.println(res);
    }
}