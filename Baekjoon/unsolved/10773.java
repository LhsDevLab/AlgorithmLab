import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

class Main {
    public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        Stack<Integer> stack = new Stack<Integer>();
        for (int i=0; i<N; i++){
            int num = Integer.parseInt(br.readLine());
            if (num == 0)
                stack.pop();
            else
                stack.push(num);
        }
        Object[] contents = stack.toArray();
        int answer = 0;
        for(Object e : contents)
            answer += (int)e;
        System.out.println(answer);
	}
}