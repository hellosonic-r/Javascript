import java.util.*;
import java.io.*;

public class Main {
	static int n;
	static int m;
	static int[] dx = {0, 1, 0, -1};
	static int[] dy = {-1, 0, 1, 0};
	static int[][] board;
	static int[][] visited;
	static ArrayDeque<int[]> queue = new ArrayDeque<>();


	public static void main(String[] args) throws Exception{
		// FileInputStream fs = new FileInputStream("./res/input.txt");
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());
		
		board = new int[n][m];
		visited = new int[n][m];
		
		for(int i = 0; i < n; i++) {
			String temp = br.readLine();
			for (int j = 0; j < temp.length(); j++) {
				board[i][j] = temp.charAt(j) - '0';
				visited[i][j] = 0;
			}
		}
		
		bfs(0, 0);
		
		System.out.println(visited[n-1][m-1]);
		
	}
	
	static void bfs(int sx, int sy) {
		queue.offer(new int[] {sx, sy});
		visited[sy][sx] = 1;
		board[sy][sx] = 0;

		while(queue.size() != 0) {
			int[] current = queue.poll();
			int x = current[0];
			int y = current[1];
			for (int i = 0; i < 4; i++) {
				int nx = x + dx[i];
				int ny = y + dy[i];
				if (0<=nx&&nx<m && 0<=ny&&ny<n && visited[ny][nx] == 0 && board[ny][nx] == 1) {
					visited[ny][nx] = visited[y][x] + 1;
					board[ny][nx] = 0;
					queue.offer(new int[] {nx,ny});
					
				}
			}
		}
	
	}
}
