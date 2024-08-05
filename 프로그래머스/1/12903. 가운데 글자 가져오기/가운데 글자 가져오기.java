class Solution {
    public String solution(String s) {
        String answer = "";
        int idx = (int)s.length() / 2;
        if (s.length() % 2 == 0) {
            answer = String.valueOf(s.charAt(idx-1)) + String.valueOf(s.charAt(idx));
        } else {
            answer = String.valueOf(s.charAt(idx));
        }
        return answer;
    }
}