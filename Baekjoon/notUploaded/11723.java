import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashSet;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int M = Integer.parseInt(br.readLine());
        HashSet<Integer> set = new HashSet<>();
        for (int i = 0; i < M; i++) {
            String[] input = br.readLine().split(" ");
            switch (input[0]) {
                case ("add"):
                    set.add(Integer.parseInt(input[1]));
                    break;
                case ("remove"):
                    set.remove(Integer.parseInt(input[1]));
                    break;
                case ("check"):
                    System.out.println(set.contains(Integer.parseInt(input[1])) ? 1 : 0);
                    break;
                case ("toggle"):
                    int n = Integer.parseInt(input[1]);
                    if (set.contains(n))
                        set.remove(n);
                    else
                        set.add(n);
                    break;
                case ("all"):
                    for (int j = 1; j <= 20; j++)
                        set.add(j);
                    break;
                case ("empty"):
                    set = new HashSet<>();
                    break;
            }
        }
    }
}