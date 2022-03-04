import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

class Main {
    static int[] readLine(BufferedReader br) throws Exception {
        String[] inp = br.readLine().split(" ");
        int[] res = new int[inp.length];
        for (int i = 0; i < inp.length; i++)
            res[i] = Integer.parseInt(inp[i]);
        return res;
    }

    static int max(int... list) {
        int max = list[0];
        for (int e : list)
            if (max < e)
                max = e;
        return max;
    }

    static int min(int... list) {
        int min = list[0];
        for (int e : list)
            if (min > e)
                min = e;
        return min;
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] lastMax = readLine(br);
        int[] lastMin = Arrays.copyOf(lastMax, 3);
        for (int i = 1; i < N; i++) {
            int[] input = readLine(br);
            int[] nextMax = new int[3];
            int[] nextMin = new int[3];
            nextMax[0] = input[0] + max(lastMax[0], lastMax[1]);
            nextMax[1] = input[1] + max(lastMax[0], lastMax[1], lastMax[2]);
            nextMax[2] = input[2] + max(lastMax[1], lastMax[2]);
            nextMin[0] = input[0] + min(lastMin[0], lastMin[1]);
            nextMin[1] = input[1] + min(lastMin[0], lastMin[1], lastMin[2]);
            nextMin[2] = input[2] + min(lastMin[1], lastMin[2]);
            lastMax = nextMax;
            lastMin = nextMin;
        }
        System.out.println(max(lastMax[0], lastMax[1], lastMax[2])
                + " " + min(lastMin[0], lastMin[1], lastMin[2]));
    }
}