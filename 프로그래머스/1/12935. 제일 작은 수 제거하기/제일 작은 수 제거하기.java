import java.util.*;

class Solution {
    public int[] solution(int[] arr) {
        int minNum = Integer.MAX_VALUE;
        List<Integer> list = new ArrayList<>();
        
        for (int i = 0; i < arr.length; i++) {
            minNum = Math.min(arr[i], minNum);
        }
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != minNum) list.add(arr[i]);
        }
        
        if (list.isEmpty()) {
            return new int[]{-1};
        } else {
            int[] result = new int[list.size()];
            for (int i = 0; i < list.size(); i++) {
                result[i] = list.get(i);
            }
            return result;
        }
    }
}