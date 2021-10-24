import java.util.Arrays;

class App {
	public static void main(String[] args) throws Exception {
        String[] temp = {"119", "97674223", "1195524421"};
        System.out.println(solution(temp));
	}
    static public boolean solution(String[] phone_book) {
        Phone[] queue = new Phone[phone_book.length];
        for(int i=0; i<phone_book.length; i++)
            queue[i] = new Phone(phone_book[i]);
        Arrays.sort(queue);

        return isInit(queue);
    }
    static class Phone implements Comparable<Phone>{
        String number;
        Phone(String number){
            this.number = number;
        };
        @Override
        public int compareTo(Phone o) {
            int a = this.number.length();
            int b = o.number.length();
            if (a>b) return 1;
            else if (b>a) return -1;
            return 0;
        }
    }
    static Boolean isInit(Phone[] queue){
        for(int i=0; i<queue.length; i++){
            String source = queue[i].number;
            for (int j=i+1; j<queue.length; j++){
                if (checkInit(source,queue[j].number))
                    return false;
            }
        }
        return true;
    }
    static Boolean checkInit(String start, String target){
        for(int i=0; i<start.length();i++){
            if (target.charAt(i) != start.charAt(i))
                return false;
        }
        return true;
    }
}