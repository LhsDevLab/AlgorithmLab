import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.regex.Pattern;

class Main {
    static HashMap<Character, Tile> tiles;
    static char[][] brd;

    static class Tile {
        int[] a = new int[2];
        int[] b = new int[2];
        char type;
        HashSet<Character> blocks1 = new HashSet<>();
        HashSet<Character> blocks2 = new HashSet<>();
        HashSet<Character> childs = new HashSet<>();

        Tile(char type) {
            this.type = type;
        }

        static int[] getRange(int x, int y) {
            int M = x > y ? x : y;
            int m = x > y ? y : x;
            int[] res = new int[M - m + 1];
            for (int i = 0; i <= (M - m); i++)
                res[i] = m + i;
            return res;
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
        final String wrong = "IMPOSSIBLE";
        brd = new char[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                char c = board[i].charAt(j);
                brd[i][j] = c;
                if (c != '.' && c != '*') {
                    if (tiles.get(c) == null) {
                        tiles.put(c, new Tile(c));
                        tiles.get(c).a[0] = i;
                        tiles.get(c).a[1] = j;
                    } else {
                        tiles.get(c).b[0] = i;
                        tiles.get(c).b[1] = j;

                    }
                }
            }
        }
        for (Tile tile : tiles.values()) {
            if (!tile.scan())
                return wrong;
            for (char c : tile.blocks1) {
                if (c == '*')
                    continue;
                tiles.get(c).childs.add(tile.type);
            }
            for (char c : tile.blocks2) {
                if (c == '*')
                    continue;
                tiles.get(c).childs.add(tile.type);
            }
        }
        Character[] keys = tiles.keySet().toArray(new Character[0]);
        Arrays.sort(keys);
        HashSet<Character> used = new HashSet<>();
        String res = "";
        while (true) {
            if (res.length() == keys.length)
                break;
            boolean flag = true;
            for (char key : keys) {
                if (used.contains(key))
                    continue;
                Tile tile = tiles.get(key);
                if (tile.blocks1.size() == 0 || tile.blocks2.size() == 0) {
                    res += key;
                    for (char c : tile.childs) {
                        tiles.get(c).blocks1.remove(key);
                        tiles.get(c).blocks2.remove(key);
                    }
                    used.add(key);
                    flag = false;
                    break;
                }
            }
            if (flag)
                return wrong;
        }
        return res;
    }

    public static void main(String[] args) throws Exception {
        // String[] board = { "NRYN", "ARYA" };
        // String[] board = { "AB", "BA" };
        // String[] board = { ".ZI.", "M.**", "MZU.", ".IU." };
        String[] board = { "M...M...DU", "....AR...R", "...E..OH.H", ".....O....",
                ".E..A..Q..", "Q....LL.*.",
                ".D.N.....U", "GT.T...F..", "....FKS...", "GN....K..S" };
        System.out.println(solution(10, 10, board));
    }
}
