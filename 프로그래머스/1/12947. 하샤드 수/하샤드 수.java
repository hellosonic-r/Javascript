class Solution {
    public boolean solution(int x) {
        boolean answer = true;
        
        char[] arr = String.valueOf(x).toCharArray();
        
        int total = 0;
        for (int i = 0; i < arr.length; i++) {
            total += Integer.parseInt(String.valueOf(arr[i]));
        }
        
        
        
        return x % total == 0 ? true : false;
    }
}