import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

class App {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	public static void main(String[] args) throws Exception {
        int T = Integer.parseInt(br.readLine());
        for(int i=0; i<T; i++){
            int[] temp = readIntlist();
            System.out.println(solution(temp[0], temp[1]));
        }
    }
    static int[] readIntlist(){
        String[] temp = null;
        try{
            temp = br.readLine().split(" ");
        }catch(Exception e){};
        int[] res = new int[temp.length];
        for(int i=0; i<temp.length; i++)
            res[i] = Integer.parseInt(temp[i]);
        return res;
    }
    static String solution(int N, int K){
        BigInteger res = new BigInteger("0");
        ArrayList<Member> list = new ArrayList<Member>();
        int[] attk = readIntlist();
        int[] prot = readIntlist();
        for(int i=0; i<N; i++)
            list.add(new Member(attk[i],prot[i]));

        Collections.sort(list, new Comparator<Member>(){
            public int compare(Member a, Member b) {
                return a.getComparekey()-b.getComparekey();
            }
        });

        int idx = 0;
        int teamSize = (int)Math.ceil(((double)N-K)/2);

        for(;idx<teamSize; idx++){
            res = res.add(new BigInteger(list.get(idx).prot+""));
        }
        for(;idx<N-teamSize; idx++){
            Member temp = list.get(idx);
            res = res.add(new BigInteger(temp.attk > temp.prot ? temp.attk+"" : temp.prot+""));
        }
        for(;idx<N; idx++){
            res = res.add(new BigInteger(list.get(idx).attk+""));
        }
        return res.toString();
    }
    static class Member{
        int attk, prot;
        Member(int a, int p){
            this.attk = a;
            this.prot = p;
        }
        int getComparekey(){
            return attk-prot;
        }
    }
}