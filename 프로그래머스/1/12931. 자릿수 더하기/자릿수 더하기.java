import java.util.*;

public class Solution {
    public int solution(int n) {
        int total = 0;
        String str = String.valueOf(n);
        for (int i = 0; i < str.length(); i++) {
            total += Integer.parseInt(String.valueOf(str.charAt(i)));
        }
        
        return total;
    }
}
