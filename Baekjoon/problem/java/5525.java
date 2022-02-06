import java.io.BufferedReader;
import java.io.InputStreamReader;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());
        String S = br.readLine();
        int res = 0;

        int start = 0;
        for (int i=0; i<M; i++){
            if (S.charAt(i) == 'I'){
                start = i;
                for (;i<M-2; i+=2){
                    if (S.charAt(i+1) != 'O' || S.charAt(i+2) != 'I')
                        break;
                }
                int temp = (i-start)/2-(N-1);
                if (temp > 0)
                    res += temp;
            }
        }
        System.out.println(res);
    }
}
