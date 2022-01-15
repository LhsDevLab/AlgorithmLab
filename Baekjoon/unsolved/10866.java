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
                case ("push_front"):
                    queue.addFirst(Integer.parseInt(inp[1]));
                    break;
                case ("push_back"):
                    queue.addLast(Integer.parseInt(inp[1]));
                    break;
                case ("pop_front"):
                    System.out.println(queue.size() == 0 ? -1 : queue.pop());
                    break;
                case ("pop_back"):
                    int temp = -1;
                    if (queue.size() != 0) {
                        temp = queue.getLast();
                        queue.removeLast();
                    }
                    System.out.println(temp);
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