import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;

class Main {
	public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        ArrayList<String> res = new ArrayList<String>();
        for(int i=0; i<T; i++){
            String[] temp = br.readLine().split(" ");
            int R = Integer.parseInt(temp[0]);
            String S = temp[1];
            String newStr = "";
            for(int j=0; j<S.length(); j++){
                char c = S.charAt(j);
                for (int k=0; k<R; k++)
                    newStr += c;
            }
            res.add(newStr);
        }
        for (String s : res){
            System.out.println(s);
        }
    }
}