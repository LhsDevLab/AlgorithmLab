import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Stack;
import java.util.stream.Collectors;

class Main {
    static HashSet<Character> tiles;
    static HashMap<Character, ArrayList<Integer[]>> infos;
    static char[][] brd;

    static int[] getRange(int a, int b) {
        int M = a > b ? a : b;
        int m = a > b ? b : a;
        int[] res = new int[M - m + 1];
        for (int i = 0; i <= (M - m); i++)
            res[i] = m + i;
        return res;
    }

    static boolean isValid(int r, int c, char tile, ArrayList<Character> used) {
        char temp = brd[r][c];
        return temp == '.' || temp == tile || used.contains(temp) ? true : false;
    }

    static ArrayList<Character> scan(ArrayList<Character> used) {
        ArrayList<Character> res = new ArrayList<>();
        for (Character tile : tiles) {
            if (used.contains(tile))
                continue;
            else {
                ArrayList<Integer[]> temp = infos.get(tile);
                Integer[] a = temp.get(0);
                Integer[] b = temp.get(1);
                int[] rowRange = getRange(a[0], b[0]);
                int[] colRange = getRange(a[1], b[1]);
                boolean isValid = true;
                for (int r : rowRange) {
                    if (isValid == false)
                        break;
                    if (!isValid(r, a[1], tile, used))
                        isValid = false;
                }
                for (int c : colRange) {
                    if (isValid == false)
                        break;
                    if (!isValid(b[0], c, tile, used))
                        isValid = false;
                }
                if (isValid) {
                    res.add(tile);
                    continue;
                } else {
                    isValid = true;
                    for (int r : rowRange) {
                        if (isValid == false)
                            break;
                        if (!isValid(r, b[1], tile, used))
                            isValid = false;
                    }
                    for (int c : colRange) {
                        if (isValid == false)
                            break;
                        if (!isValid(a[0], c, tile, used))
                            isValid = false;
                    }
                    if (isValid)
                        res.add(tile);
                }
            }
        }
        return res;
    }

    static public String solution(int m, int n, String[] board) {
        tiles = new HashSet<>();
        infos = new HashMap<>();
        String answer = "IMPOSSIBLE";
        brd = new char[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                char c = board[i].charAt(j);
                brd[i][j] = c;
                if (c != '.' && c != '*') {
                    tiles.add(c);
                    Integer[] temp = { i, j };
                    if (infos.get(c) == null)
                        infos.put(c, new ArrayList<>());
                    infos.get(c).add(temp);
                }
            }
        }
        Stack<ArrayList<Character>> stack = new Stack<>();
        stack.add(new ArrayList<>());
        while (stack.size() != 0) {
            ArrayList<Character> used = stack.pop();
            if (used.size() == tiles.size()) {
                answer = used.stream().map(e -> e + "").collect(Collectors.joining());
                break;
            }
            ArrayList<Character> valids = scan(used);
            Collections.sort(valids, Collections.reverseOrder());
            for (Character v : valids) {
                ArrayList<Character> temp = (ArrayList<Character>) used.clone();
                temp.add(v);
                stack.add(temp);
            }
        }
        return answer;
    }

    public static void main(String[] args) throws Exception {
        String[] board = { "DBA", "C*A", "CDB" };
        // String[] board = { "NRYN", "ARYA" };
        // String[] board = { ".ZI.", "M.**", "MZU.", ".IU." };
        // String[] board = { "M...M...DU", "....AR...R", "...E..OH.H", ".....O....",
        // ".E..A..Q..", "Q....LL.*.",
        // ".D.N.....U", "GT.T...F..", "....FKS...", "GN....K..S" };
        System.out.println(solution(3, 3, board));
    }
}