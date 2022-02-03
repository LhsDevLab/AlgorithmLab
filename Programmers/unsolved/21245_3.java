import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Stack;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

class Main {
    static HashMap<Character, Tile> tiles;
    static char[][] brd;

    static class Tile {
        int[] a = new int[2];
        int[] b = new int[2];
        char type;
        HashSet<Character> blocks1 = new HashSet<>();
        HashSet<Character> blocks2 = new HashSet<>();

        Tile(char type) {
            this.type = type;
        }

        void setApos(int r, int c) {
            a[0] = r;
            a[1] = c;
        }

        void setBpos(int r, int c) {
            b[0] = r;
            b[1] = c;
        }

        static int[] getRange(int x, int y) {
            int M = x > y ? x : y;
            int m = x > y ? y : x;
            int[] res = new int[M - m + 1];
            for (int i = 0; i <= (M - m); i++)
                res[i] = m + i;
            return res;
        }

        boolean isBreakable(LinkedHashSet<Character> used) {
            boolean x = true;
            boolean y = true;
            for (Character c : blocks1) {
                if (!used.contains(c)) {
                    x = false;
                    break;
                }
            }
            for (Character c : blocks2) {
                if (!used.contains(c)) {
                    y = false;
                    break;
                }
            }
            return x || y;
        }

        boolean scan() {
            int[] rowRange = getRange(a[0], b[0]);
            int[] colRange = getRange(a[1], b[1]);
            String regex = "^[." + type + "]*$";
            for (int r : rowRange) {
                if (!Pattern.matches(regex, brd[r][a[1]] + ""))
                    blocks1.add(brd[r][a[1]]);
            }
            for (int c : colRange) {
                if (!Pattern.matches(regex, brd[b[0]][c] + ""))
                    blocks1.add(brd[b[0]][c]);
            }

            for (int r : rowRange) {
                if (!Pattern.matches(regex, brd[r][b[1]] + ""))
                    blocks2.add(brd[r][b[1]]);
            }
            for (int c : colRange) {
                if (!Pattern.matches(regex, brd[a[0]][c] + ""))
                    blocks2.add(brd[a[0]][c]);
            }
            return blocks1.contains('*') && blocks2.contains('*') ? false : true;
        }
    }

    static public String solution(int m, int n, String[] board) {
        tiles = new HashMap<>();
        String answer = "IMPOSSIBLE";
        brd = new char[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                char c = board[i].charAt(j);
                brd[i][j] = c;
                if (c != '.' && c != '*') {
                    if (tiles.get(c) == null) {
                        tiles.put(c, new Tile(c));
                        tiles.get(c).setApos(i, j);
                    } else
                        tiles.get(c).setBpos(i, j);
                }
            }
        }
        Character[] temp = tiles.keySet().toArray(new Character[0]);
        Arrays.sort(temp, Comparator.reverseOrder());
        LinkedHashSet<Character> keys = new LinkedHashSet<>();
        for (Character c : temp) {
            if (!tiles.get(c).scan())
                return answer;
            keys.add(c);
        }
        Stack<LinkedHashSet<Character>> stack = new Stack<>();
        stack.add(new LinkedHashSet<>());
        while (stack.size() != 0) {
            LinkedHashSet<Character> used = stack.pop();
            if (used.size() == tiles.size()) {
                answer = used.stream().map(e -> e + "").collect(Collectors.joining());
                break;
            }
            for (Character key : keys) {
                if (!used.contains(key)) {
                    if (tiles.get(key).isBreakable(used)) {
                        LinkedHashSet<Character> next = (LinkedHashSet<Character>) used.clone();
                        next.add(key);
                        stack.add(next);
                    }
                }
            }
        }
        return answer;
    }

    public static void main(String[] args) throws Exception {
        String[] board = { "DBA",
                "C*A",
                "CDB" };
        // String[] board = { "NRYN", "ARYA" };
        // String[] board = { ".ZI.", "M.**", "MZU.", ".IU." };
        // String[] board = { "M...M...DU", "....AR...R", "...E..OH.H", ".....O....",
        // ".E..A..Q..", "Q....LL.*.",
        // ".D.N.....U", "GT.T...F..", "....FKS...", "GN....K..S" };
        System.out.println(solution(3, 3, board));
    }
}
