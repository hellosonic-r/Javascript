class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        int[] numList = new int[10];
        for (int i = 0; i < 10; i++) {
            numList[i] = 0;
        }
        
        for (int i = 0; i < numbers.length; i++) {
            numList[numbers[i]] += 1;
        }
        
        for (int i = 0; i < numList.length; i++) {
            if (numList[i] == 0) {
                answer += i;
            }
        }
        
        return answer;
    }
}