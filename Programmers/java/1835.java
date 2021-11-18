import java.util.List;
import java.util.Arrays;

class App {
    static int answer = 0;
    static String[] conditions;

    public static void main(String[] args) throws Exception {
        String[] temp = {"N~F=0", "R~T>2"};
        solution(2,temp);
        System.out.println(answer);
	}
    public static void solution(int n, String[] data) {
        conditions = data;
        String[] temp = {"A","C","F","J","M","N","R","T"};
        permutation(temp,0);
    }
    static boolean checkConditions(List list){
        for (String opr : conditions){
            char o = opr.charAt(3);
            int gap = Integer.parseInt(opr.charAt(4)+"");
            int space = Math.abs(list.indexOf(opr.charAt(0)+"")-list.indexOf(opr.charAt(2)+""))-1;
            if (o == '>' && !(space>gap))
                return false;
            else if (o == '=' && !(space == gap))
                return false;
            else if (o == '<' && !(space<gap))
                return false;
        }
        return true;
    }
    public static String[] swapChar(String[] list, int a, int b){
        String[] res = list.clone();
        String temp = res[a];
        res[a] = res[b];
        res[b] = temp;
        return res;
    }
    public static void permutation(String[] list,int depth){
        if (depth == list.length){
            if (checkConditions(Arrays.asList(list)))
                answer += 1;
            return;
        }
        for(int i = depth; i<list.length; i++){
            permutation(swapChar(list,depth,i),depth+1);
        }
    }
}