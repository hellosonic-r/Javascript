class Solution {
    public int[][] solution(int[][] arr1, int[][] arr2) {
        int y = arr1.length;
        int x = arr1[0].length;
        int[][] arr = new int[y][x];
        
        for (int i = 0; i < y; i++) {
            for (int j = 0; j < x; j++) {
               arr[i][j] = arr1[i][j] + arr2[i][j]; 
            }
        }
        return arr;
    }
}