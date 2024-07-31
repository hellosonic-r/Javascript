class Solution {
    boolean solution(String s) {
        boolean answer = true;

        s = s.toLowerCase();
        int pCnt = 0;
        int yCnt = 0;
        
        for (int i = 0; i < s.length(); i++) {
            char l = s.charAt(i);
            if (l == 'p') pCnt += 1;
            else if (l == 'y') yCnt += 1;
        }
    

        return pCnt == yCnt ? true : false;
    }
}