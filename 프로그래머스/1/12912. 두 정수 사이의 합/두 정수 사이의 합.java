class Solution {
    public long solution(int a, int b) {
        long total = 0;
        int temp = 0;
        if (a > b) {
            temp = a;
            a = b;
            b = temp;
        }
        for (int i = a; i < b+1; i++) {
            total += i;
        }
        
        return total;
    }
}