class Solution {
    public int[] solution(int n, int m) {
        int maxNum = 0;
        
        for (int i = 1; i <= Math.max(n, m); i++) {
            if (n % i == 0 && m % i == 0) maxNum = Math.max(maxNum, i);
        } 
        int minNum = (n / maxNum) * (m / maxNum) * maxNum;
        
        return new int[] {maxNum, minNum};
        
        
    }
}