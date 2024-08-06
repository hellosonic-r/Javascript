import java.util.*;

class Solution {
    public boolean solution(String s) {
        List<Character> list = new ArrayList<>();
        for (char i = '0'; i <= '9'; i++) {
            list.add(i);
        }
        char[] arr = s.toCharArray();
        for (int i = 0; i < arr.length; i++) {
            if (!list.contains(arr[i])) return false;
        }
        
        return arr.length == 4 || arr.length == 6 ? true : false;
    }
}