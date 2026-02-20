import java.io.*;
import java.util.*;

public class Main {
	static int n, k, result;
	static boolean[] visited;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		n = Integer.parseInt(st.nextToken());
		k = Integer.parseInt(st.nextToken());

		result = 0;
		visited = new boolean[100001];

		bfs(n);
		System.out.println(result);

	}

	static void bfs(int x) {
		ArrayDeque<int[]> queue = new ArrayDeque<>();
		queue.offer(new int[] {x, 0});
		visited[x] = true;
		
		while (!queue.isEmpty()) {
			int[] curr = queue.poll();
			int cx = curr[0];
			int time = curr[1];
			if (cx == k) {
				result = time;
				break;
			}
			
			if (0<=cx-1 && cx-1<=100000 && visited[cx-1] == false) {
				visited[cx-1] = true;
				queue.offer(new int[] {cx-1, time+1});
			}
			if (0<=cx+1 && cx+1<=100000 && visited[cx+1] == false) {
				visited[cx+1] = true;
				queue.offer(new int[] {cx+1, time+1});
			}
			if (0<=cx*2 && cx*2<=100000 && visited[cx*2] == false) {
				visited[cx*2] = true;
				queue.offer(new int[] {cx*2, time+1});
			}
		}
	}
}