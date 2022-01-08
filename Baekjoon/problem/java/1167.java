import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

class Main {
    static int N;
    static HashSet<Integer> nonVisited;
    static HashMap<Integer, HashMap<Integer, Integer>> tree;
    static int answer = 0;
    public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        nonVisited = new HashSet<Integer>();
        tree = new HashMap<Integer, HashMap<Integer, Integer>>();
        for (int i=1; i<=N; i++){
            nonVisited.add(i);
            tree.put(i,new HashMap<Integer, Integer>());
        }
        for (int i=0; i<N; i++){
            int[] input = parseLine(br);
            for (int j=1; true; j+=2){
                if (input[j] == -1)
                    break;
                HashMap<Integer, Integer> temp = tree.get(input[0]);
                temp.put(input[j], input[j+1]);
            }
        }
        while(!nonVisited.isEmpty())
            DFS(nonVisited.toArray(new Integer[0])[0],0);   
        System.out.println(answer);
	}
    static int[] parseLine(BufferedReader br) throws Exception {
        String[] input = br.readLine().split(" ");
        int[] res = new int[input.length];
        for (int i=0; i<input.length; i++)
            res[i] = Integer.parseInt(input[i]);
        return res;
    }
    static int[] getBig2(List<Integer> values){
        int[] res = {0,-1};
        for (int v : values){
            if (res[0] > res[1] && res[1] < v)
                res[1] = v;
            else if (res[1] > res[0] && res[0] < v)
                res[0] = v;
        }
        return res;
    }
    static int DFS(int node, int value){
        List<Integer> childs = new ArrayList<Integer>(tree.get(node).keySet());
        List<Integer> values = new ArrayList<Integer>();
        nonVisited.remove(node);
        for (int child : childs)
            if (nonVisited.contains(child))
                values.add(DFS(child,tree.get(node).get(child)));
        int[] temp = getBig2(values);
        if (temp[0]+temp[1] > answer)
            answer = temp[0]+temp[1];
        return Math.max(temp[0],temp[1])+value;
    }
}