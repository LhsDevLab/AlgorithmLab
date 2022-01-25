import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        LinkedList<Integer> queue = new LinkedList<Integer>();
        for (int i = 0; i < N; i++) {
            String[] inp = br.readLine().split(" ");
            switch (inp[0]) {
                case ("push"):
                    queue.add(Integer.parseInt(inp[1]));
                    break;
                case ("pop"):
                    System.out.println(queue.size() == 0 ? -1 : queue.pop());
                    break;
                case ("size"):
                    System.out.println(queue.size());
                    break;
                case ("empty"):
                    System.out.println(queue.size() == 0 ? 1 : 0);
                    break;
                case ("front"):
                    System.out.println(queue.size() == 0 ? -1 : queue.getFirst());
                    break;
                case ("back"):
                    System.out.println(queue.size() == 0 ? -1 : queue.getLast());
                    break;
            }
        }
    }
}