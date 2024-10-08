import java.util.*;
import java.io.*;


public class Main {
    
    static int[][] board;
    

    public static void main(String[] args) throws Exception {
        // System.setIn(new FileInputStream("./res/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        board = new int[n][m];
        
        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < m; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        
       	int result = 0;
        
        for (int y = 0; y < n-1; y++) {
        	for (int x = 0; x < m-1; x++) {
        		result = Math.max(result, yellow(x, y));
        	}
        }
        
        for (int y = 0; y < n; y++) {
        	for (int x = 0; x < m-3; x++) {
        		result = Math.max(result, skyblue1(x, y));
        	}
        }
        
        for (int y = 0; y < n-3; y++) {
        	for (int x = 0; x < m; x++) {
        		result = Math.max(result, skyblue2(x, y));
        	}
        }
        
        for (int y = 0; y < n-1; y++) {
        	for (int x = 0; x < m-2; x++) {
        		result = Math.max(result, pink1(x, y));
        		result = Math.max(result, green3(x, y));
        		result = Math.max(result, orange3(x, y));
        		result = Math.max(result, orange5(x, y));
        		result = Math.max(result, orange6(x, y));
        	}
        }
        
        for (int y = 1; y < n; y++) {
        	for (int x = 0; x < m-2; x++) {
        		result = Math.max(result, pink2(x, y));
        		result = Math.max(result, green4(x, y));
        		result = Math.max(result, orange4(x, y));
        	}
        }
        
        for (int y = 0; y < n-2; y++) {
        	for (int x = 0; x < m-1; x++) {
        		result = Math.max(result, pink3(x, y));
        		result = Math.max(result, orange1(x, y));
        		result = Math.max(result, green1(x, y));
        		result = Math.max(result, orange7(x, y));
        		result = Math.max(result, orange8(x, y));
        	}
        }
        
        for (int y = 0; y < n-2; y++) {
        	for (int x = 1; x < m; x++) {
        		result = Math.max(result, pink4(x, y));
        		result = Math.max(result, orange2(x, y));
        		result = Math.max(result, green2(x, y));
        		
        	}
        }
        
        System.out.println(result);

    }
    

    
    
    public static int yellow(int sx, int sy) {
        int total = 0;
        for (int y = sy; y < sy + 2; y++) {
            for (int x = sx; x < sx + 2; x++) {
                total += board[y][x];
            }
        }
        
        return total;
    }
    
    public static int skyblue1(int sx, int sy) { // 가로   
        int total = 0; 
        for (int x = sx; x < sx + 4; x++) {
            total += board[sy][x];
        }
        
        return total;
    }
    
    public static int skyblue2(int sx, int sy) { // 세로  
        int total = 0;
        for (int y = sy; y < sy + 4; y++) {
            total += board[y][sx];
        }
        
        return total;
    }
    
    public static int pink1(int sx, int sy) { // ㅜ   
        int total = 0;
        for (int x = sx; x < sx + 3; x++) {
            total += board[sy][x];
        }
        total += board[sy+1][sx+1];
        
        return total;
    }
    
    public static int pink2(int sx, int sy) { // ㅗ   
        int total = 0;
        for (int x = sx; x < sx + 3; x++) {
            total += board[sy][x];
        }
        total += board[sy-1][sx+1];
        
        return total;
    }
    
    public static int pink3(int sx, int sy) { // ㅏ   
        int total = 0;
        for (int y = sy; y < sy + 3; y++) {
            total += board[y][sx];
        }
        total += board[sy+1][sx+1];
        
        return total;
    }
    
    public static int pink4(int sx, int sy) { // ㅓ          
        int total = 0;
        for (int y = sy; y < sy + 3; y++) {
            total += board[y][sx];
        }
        total += board[sy+1][sx-1];
        
        return total;
    }
    
    public static int orange1(int sx, int sy) { // ㄴ  
        int total = 0;
        for (int y = sy; y < sy + 3; y++) {
            total += board[y][sx];
        }
        total += board[sy+2][sx+1];
        
        return total;
    }
    
    public static int orange2(int sx, int sy) { // ㄴ 반대
        int total = 0;
        for (int y = sy; y < sy + 3; y++) {
        	total += board[y][sx];
        }
        total += board[sy+2][sx-1];
        
        return total;
    }
    
    public static int orange3(int sx, int sy) { // ㄴ 가로
    	int total = 0;
    	for (int x = sx; x < sx + 3; x++) {
    		total += board[sy+1][x];
    	}
    	total += board[sy][sx];
    	
    	return total;
    	
    }
    
    public static int orange4(int sx, int sy) { // ㄴ 가로 반대
    	int total = 0;
    	for (int x = sx; x < sx + 3; x++) {
    		total += board[sy][x];
    	}
    	total += board[sy-1][sx+2];
    	
    	return total;
    }
    
    public static int orange5(int sx, int sy) { // ㄱ 가로
    	int total = 0;
    	for (int x = sx; x < sx + 3; x++) {
    		total += board[sy][x];
    	}
    	total += board[sy+1][sx+2];
    	
    	return total; 
    }
    
    public static int orange6(int sx, int sy) { // ㄱ 가로 반대
    	int total = 0;
    	for (int x = sx; x < sx+ 3; x++) {
    		total += board[sy][x];
    	}
    	total += board[sy+1][sx];
    	
    	return total;
    }
    
    public static int orange7(int sx, int sy) { // ㄱ 세로
    	int total = 0;
    	for (int y = sy; y < sy + 3; y++) {
    		total += board[y][sx+1];
    	}
    	total += board[sy][sx];
    	
    	return total;
    }
    
    public static int orange8(int sx, int sy) { // ㄱ 세로 반대
    	int total = 0;
    	for (int y = sy; y < sy + 3; y++) {
    		total += board[y][sx];
    	}
    	total += board[sy][sx+1];
    	
    	return total;
    }
    
    public static int green1(int sx, int sy) {
    	int total = 0;
    	for (int y = sy; y < sy + 2; y++) {
    		total += board[y][sx];
    	}
    	for (int y = sy + 1; y < sy + 3; y++) {
    		total += board[y][sx+1];
    	}
    	
    	return total;
    }
    
    public static int green2(int sx, int sy) {
    	int total = 0;
    	for (int y = sy; y < sy + 2; y++) {
    		total += board[y][sx];
    	}
    	for (int y = sy + 1; y < sy + 3; y++) {
    		total += board[y][sx-1];
    	}
    	
    	return total;
    }
    
    public static int green3(int sx, int sy) {
    	int total = 0;
    	for (int x = sx; x < sx + 2; x++) {
    		total += board[sy][x];
    	}
    	for (int x = sx + 1; x < sx + 3; x++) {
    		total += board[sy+1][x];
    	}
    	
    	return total;
    }

    public static int green4(int sx, int sy) {
    	int total = 0;
    	for (int x = sx; x < sx + 2; x++) {
    		total += board[sy][x];
    	}
    	for (int x = sx + 1; x < sx + 3; x++) {
    		total += board[sy-1][x];
    	}
    	
    	return total;
    }

}



