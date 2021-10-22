import java.io.*;
class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] nums = br.readLine().split(" ");
        int total = 0;
        for(String n : nums){
            total += Math.pow(Integer.parseInt(n),2);
        }
        System.out.println(total%10);
	}
}