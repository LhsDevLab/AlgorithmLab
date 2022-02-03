import java.util.ArrayList;
import java.util.HashMap;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

class Main {
    static public String solution(String sentence) {
        System.out.println(sentence);
        ArrayList<String> answer = new ArrayList<>();
        HashMap<Character, ArrayList<Integer>> map = new HashMap<>();
        for (int i = 0; i < sentence.length(); i++) {
            char c = sentence.charAt(i);
            if (Character.isLowerCase(c)) {
                if (map.get(c) == null)
                    map.put(c, new ArrayList<>());
                map.get(c).add(i);
            }
        }
        for (ArrayList<Integer> e : map.values()) {
            Integer[] arr = e.toArray(new Integer[0]);
            if (arr.length != 2) {
                int next = arr[0] + 2;
                for (int i = 1; i < arr.length - 1; i++) {
                    if (arr[i] != next)
                        return "invalid";
                    next += 2;
                }
            }
        }
        int lastIdx = 0;
        try {
            for (int i = 0; i < sentence.length(); i++) {
                char c = sentence.charAt(i);
                if (Character.isLowerCase(c)) {
                    Integer[] arr = map.get(c).toArray(new Integer[0]);
                    if (arr.length == 2) {
                        if (arr[1] - arr[0] == 1)
                            return "invalid";
                        answer.add(sentence.substring(lastIdx, i));
                        char type = sentence.charAt(i + 2);
                        if (Character.isLowerCase(type)) {
                            String temp = "";
                            for (int j = i + 2; j < arr[1]; j += 2) {
                                if (sentence.charAt(j) == type)
                                    temp += sentence.charAt(j - 1);
                                else
                                    return "invalid";
                            }
                            temp += sentence.charAt(arr[1] - 1);
                            answer.add(temp);
                        } else {
                            answer.add(sentence.substring(i + 1, arr[1]));
                        }
                        lastIdx = arr[1] + 1;
                        i = lastIdx - 1;
                    } else {
                        answer.add(sentence.substring(lastIdx, i - 1));
                        String temp = "";
                        for (int e : arr)
                            temp += sentence.charAt(e - 1);
                        lastIdx = arr[arr.length - 1] + 2;
                        i = lastIdx - 1;
                        temp += sentence.charAt(i);
                        answer.add(temp);
                    }
                }
            }
            answer.add(sentence.substring(lastIdx));
        } catch (Exception e) {
            return "invalid";
        }
        String res = answer.stream().filter(e -> e.length() > 0).collect(Collectors.joining(" "));
        System.out.println(res);
        if (!Pattern.matches("^[A-Z ]*$", res))
            return "invalid";
        return res;
    }

    public static void main(String[] args) throws Exception {
        System.out.println(solution("A "));
    }
}