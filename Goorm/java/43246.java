import java.io.*;

public class App {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        myQueue queue = new myQueue(3);
        for (int i = 0; i < N; i++) {
            switch (br.readLine()) {
            case ("e"):
            case ("E"):
                System.out.print(queue.enQueue(Integer.parseInt(br.readLine())) ? "" : "overflow\n");
                break;
            case ("d"):
            case ("D"):
                System.out.print(queue.deQueue() ? "" : "underflow\n");
                break;
            }
        }
        queue.print();
    }

    static class myQueue {
        int size;
        int[] array;
        int head, rear;

        myQueue(int size) {
            this.size = size;
            this.array = new int[size + 1];
            head = 0;
            rear = size;
        };

        int current() {
            int temp = rear > head ? head + size + 1 : head;
            return temp - rear;
        }

        public boolean enQueue(int value) {
            if (current() == 0) {
                return false;
            } else {
                array[head] = value;
                head = mod(head + 1);
                return true;
            }
        }

        public boolean deQueue() {
            if (current() == 1)
                return false;
            else {
                rear = mod(rear + 1);
                return true;
            }
        }

        int mod(int n) {
            return n % (size + 1);
        }

        void print() {
            String res = "";
            int temp = current();
            if (temp == 0)
                temp = size + 1;
            for (int i = 0; i < temp - 1; i++)
                res += array[mod(i + rear + 1)] + " ";
            System.out.println(res.trim());
        }
    }
}