import java.util.*;

class Solution {
    public int[] solution(int[] arr) {
        int minNum = Integer.MAX_VALUE;
        List<Integer> list = new ArrayList<>();
        
        for (int i = 0; i < arr.length; i++) {
            minNum = Math.min(minNum, arr[i]);
        }
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != minNum) list.add(arr[i]);
        }
        return list.size() == 0 ? new int[] {-1} : list.stream().mapToInt(i -> i).toArray();
    }
}