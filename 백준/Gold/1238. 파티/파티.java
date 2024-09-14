import java.util.*;
import java.io.*;

public class Main {
	
	static int n, m, x;
	static int[][] graph;

	public static void main(String[] args) throws Exception {
		// System.setIn(new FileInputStream("./src/res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());
		x = Integer.parseInt(st.nextToken());
		
		graph = new int[n+1][n+1];
		
		for (int i = 1; i < n + 1; i++) {
			Arrays.fill(graph[i], Integer.MAX_VALUE);
			graph[i][i] = 0;
		}
		
		for (int i = 0; i < m; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			int weight = Integer.parseInt(st.nextToken());
			graph[from][to] = weight;
		}
		
		int[] toParty = dijkstra(x);
		int[] fromParty = reverseDijkstra(x);
		
		int maxTime = 0;
		for (int i = 1; i <= n; i++) {
			maxTime = Math.max(maxTime, toParty[i] + fromParty[i]);
		}
		
		System.out.println(maxTime);
	}
	
	static int[] dijkstra(int start) {
		boolean[] visited = new boolean[n+1];
		int[] dist = new int[n+1];
		Arrays.fill(dist, Integer.MAX_VALUE);
		dist[start] = 0;
		
		for (int i = 1; i < n+1; i++) {
			int minDist = Integer.MAX_VALUE;
			int minNode = -1;
			for (int j = 1; j < n+1; j++) {
				if (!visited[j] && dist[j] < minDist) {
					minDist = dist[j];
					minNode = j;
				}
			}
			
			if (minNode == -1) break;
			visited[minNode] = true;
			
			for (int j = 1; j < n+1; j++) {
				if (!visited[j] && graph[minNode][j] != Integer.MAX_VALUE) {
					dist[j] = Math.min(dist[j], dist[minNode] + graph[minNode][j]);
					
				}
			}
		}
		return dist;
	}
	
	static int[] reverseDijkstra(int start) {
		boolean[] visited = new boolean[n+1];
		int[] dist = new int[n+1];
		Arrays.fill(dist, Integer.MAX_VALUE);
		dist[start] = 0;
		
		for (int i = 1; i < n+1; i++) {
			int minDist = Integer.MAX_VALUE;
			int minNode = -1;
			
			for (int j = 1; j < n+1; j++) {
				if (!visited[j] && dist[j] < minDist) {
					minDist = dist[j];
					minNode = j;
				}
			}
			
			if (minNode == -1) break;
			visited[minNode] = true;
			
			for (int j = 1; j < n+1; j++) {
				if (!visited[j] && graph[j][minNode] != Integer.MAX_VALUE) {
					dist[j] = Math.min(dist[j], dist[minNode] + graph[j][minNode]);
				}
			}
		}
		return dist;
	}
	
	
}
