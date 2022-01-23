import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");
        int N = Integer.parseInt(input[0]);
        int M = Integer.parseInt(input[1]);
        HashSet<String> set = new HashSet<String>();
        for (int i = 0; i < N; i++)
            set.add(br.readLine());
        ArrayList<String> called = new ArrayList<String>();
        for (int i = 0; i < M; i++) {
            String name = br.readLine();
            if (set.contains(name))
                called.add(name);
        }
        String[] arr = called.toArray(new String[0]);
        Arrays.sort(arr);
        System.out.println(M - called.size());
        for (String name : arr)
            System.out.println(name);
    }
}