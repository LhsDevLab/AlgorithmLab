import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;

class Main {
    static int sign = 1;
    static String input;
    static int idx = 0;

    static Integer nextNum() {
        if (idx == input.length())
            return null;
        int end = idx + 1;
        for (; end < input.length(); end++) {
            char c = input.charAt(end);
            if (c == '-' || c == '+')
                break;
        }
        int res = Integer.parseInt(input.substring(idx, end));
        idx = end;
        return res;
    }

    static int sum = 0;
    static int max = 0;
    static ArrayList<Integer> list = new ArrayList<Integer>();

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        input = br.readLine();
        ArrayList<Integer> nums = new ArrayList<Integer>();
        Integer temp = nextNum();
        while (temp != null) {
            nums.add(temp);
            temp = nextNum();
        }
        int total = 0;
        boolean trigger = false;
        for (int e : nums) {
            if (trigger == true) {
                total -= Math.abs(e);
            } else {
                total += e;
                if (e < 0)
                    trigger = true;
            }
        }
        System.out.println(total);
    }
}