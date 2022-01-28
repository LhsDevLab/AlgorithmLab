import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;

class Main {

    public static class Dex {
        String[] numbering;
        HashMap<String, Integer> naming;

        public Dex(int size) {
            numbering = new String[size + 1];
            naming = new HashMap<String, Integer>();
        }

        int get(String name) {
            return naming.get(name);
        }

        String get(int number) {
            return numbering[number];
        }

        void put(int num, String name) {
            numbering[num] = name;
            naming.put(name, num);
        }
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");
        int N = Integer.parseInt(input[0]);
        Dex dex = new Dex(N);
        for (int i = 1; i <= N; i++)
            dex.put(i, br.readLine());
        for (int i = 0; i < Integer.parseInt(input[1]); i++) {
            String temp = br.readLine();
            try {
                System.out.println(dex.get(Integer.parseInt(temp)));
            } catch (NumberFormatException e) {
                System.out.println(dex.get(temp));
            }
        }

    }
}