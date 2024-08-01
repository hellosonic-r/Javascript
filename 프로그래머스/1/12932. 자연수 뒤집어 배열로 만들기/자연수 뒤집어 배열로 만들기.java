class Solution {
    public int[] solution(long n) {
        String s = String.valueOf(n);
        StringBuilder sb = new StringBuilder();
        String answer = sb.append(s).reverse().toString();
        char[] charArr = answer.toCharArray();
        int[] intArr = new int[charArr.length];
        for (int i = 0; i < charArr.length; i++) {
            intArr[i] = Integer.parseInt(String.valueOf(charArr[i]));
            
        }
        return intArr;
        
        
    }
}