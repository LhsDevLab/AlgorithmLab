import java.util.ArrayList;

class App {
    final static String members = "ACFJMNRT";
    final static String oprs = ">=<";
    static int answer = 0;
    static ArrayList<ArrayList<Integer>> condiTarget = new ArrayList<ArrayList<Integer>>();
    static int[][] condis;
    public static void main(String[] args) throws Exception {
        String[] temp = {"M~C<2", "C~M>1"};
        System.out.println(solution(2,temp));
	}
    static int solution(int n, String[] data) {
        ArrayList<Integer> remain = new ArrayList<Integer>();
        for(int i=0; i<8; i++){
            condiTarget.add(new ArrayList<Integer>());
            remain.add(i);
        }
        condis = new int[n][];
        for(int i=0; i<n; i++){
            int[] temp = parse(data[i]); 
            condis[i] = temp;
            condiTarget.get(temp[0]).add(i);
            condiTarget.get(temp[1]).add(i);
        }
        customPermutation(new ArrayList<Integer>(), remain);
        return answer;
    }
    static void customPermutation(ArrayList<Integer> arr, ArrayList<Integer> remain){
        if (remain.size() == 0)
            answer += 1;
        for(int i=0; i<remain.size(); i++){
            ArrayList<Integer> newArr = copy(arr);
            ArrayList<Integer> newRemain = copy(remain);
            newArr.add(remain.get(i));
            newRemain.remove(i);
            if (isValid(newArr,condiTarget.get(remain.get(i))))
                customPermutation(newArr,newRemain);
        }
    }
    static ArrayList<Integer> copy (ArrayList<Integer> arr){
        ArrayList<Integer> res = new ArrayList<Integer>();
        for(int e : arr){
            res.add(e);
        }
        return res;
    }
    static int[] parse(String data){
        int[] res = {members.indexOf(data.charAt(0)),members.indexOf(data.charAt(2)),oprs.indexOf(data.charAt(3)),Integer.parseInt(""+data.charAt(4))};
        return res;
    }
    static Boolean isValid(ArrayList<Integer> arr, ArrayList<Integer> list){
        for(int e : list){
            int[] condi = condis[e];
            int a = condi[0], b=condi[1], value = condi[3];
            int idxA = arr.indexOf(a); int idxB = arr.indexOf(b);
            if (idxA == -1 || idxB == -1)
                return true;
            switch(condi[2]){
                case(0):
                    if (Math.abs(idxA-idxB) <= value+1)
                        return false;
                break;
                case(1):
                    if (Math.abs(idxA-idxB) != value+1)
                        return false;
                break;
                case(2):
                    if (Math.abs(idxA-idxB) >= value+1)
                        return false;
                break;
            }
        }
        return true;
    }
    // static void print(ArrayList<Integer> arr){
    //     for(int e: arr){
    //         System.out.printf("%d ",e);
    //     }
    //     System.out.println();
    // }
}