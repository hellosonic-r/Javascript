import java.util.*;
class Solution {
    public long solution(long n) {
        String[] strArr = String.valueOf(n).split("");
        StringBuilder sb = new StringBuilder();
        
        Arrays.sort(strArr, (o1, o2) -> o2.compareTo(o1));
        
            
        for (int i = 0; i < strArr.length; i++) {
            sb.append(strArr[i]);
        }
        
        long answer = Long.parseLong(sb.toString());
        return answer;
    }
}