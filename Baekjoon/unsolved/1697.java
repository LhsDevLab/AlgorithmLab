import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashSet;

class Main {
    static int N;
    static int count;

    public static HashSet<Integer> preSet(HashSet<Integer> set) {
        HashSet<Integer> res = new HashSet<Integer>();
        count += 1;
        for (int e : set) {
            res.add(e + 1);
            if (e > 0)
                res.add(e - 1);
            if (e % 2 == 0)
                res.add(e / 2);
        }
        if (res.contains(N))
            return null;
        return res;
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");
        N = Integer.parseInt(input[0]);
        int K = Integer.parseInt(input[1]);
        if (N >= K) {
            count = N - K;
        } else {
            HashSet<Integer> set = new HashSet<Integer>();
            set.add(K);
            count = 0;
            while (set != null)
                set = preSet(set);
        }
        System.out.println(count);
    }
}