import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

class Main {
    public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        Stack<Integer> stack = new Stack<Integer>();
        for (int i=0; i<N; i++){
            String[] inp = br.readLine().split(" ");
            switch(inp[0]){
                case("push"):
                    stack.push(Integer.parseInt(inp[1]));
                break;
                case("pop"): 
                    System.out.println(stack.size() == 0 ? -1 : stack.pop());
                break;
                case("size"): 
                    System.out.println(stack.size());
                break;
                case("empty"): 
                    System.out.println(stack.size() == 0 ? 1 : 0);
                break;
                case("top"): 
                    System.out.println(stack.size() == 0 ? -1 : stack.peek());
                break;
            }
        }
	}
}