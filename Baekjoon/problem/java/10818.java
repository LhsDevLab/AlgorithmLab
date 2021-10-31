import java.io.BufferedReader;
import java.io.InputStreamReader;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        String[] temp = br.readLine().split(" ");
        Double min = Double.POSITIVE_INFINITY;
        Double max = Double.NEGATIVE_INFINITY;
        for(String e : temp){
            Double num = Double.parseDouble(e);
            if (min > num) min = num;
            if (max < num) max = num;
        }
        System.out.printf("%d %d\n",(int)Math.floor(min), (int)Math.floor(max));
    }
}
