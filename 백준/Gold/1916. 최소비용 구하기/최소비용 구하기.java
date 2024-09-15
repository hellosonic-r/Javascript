import java.util.*;
import java.io.*;

public class Main {
	
	static final int INF = Integer.MAX_VALUE;
	static ArrayList<int[]>[] graph;
	static int n;

	public static void main(String[] args) throws Exception {
		// System.setIn(new FileInputStream("./src/res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		
		n = Integer.parseInt(br.readLine()); // 도시의 개수 	
		int m = Integer.parseInt(br.readLine()); // 버스의 개수
		
		graph = new ArrayList[n+1];
		for (int i = 1; i < n+1; i++) {
			graph[i] = new ArrayList<>();
		}
		
		for (int i = 0; i < m; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			int weight = Integer.parseInt(st.nextToken());
			graph[from].add(new int[] {to, weight});
		}
		
		st = new StringTokenizer(br.readLine());
		int start = Integer.parseInt(st.nextToken());
		int end = Integer.parseInt(st.nextToken());
		
		int[] result = dijkstra(start);
		System.out.println(result[end]);
	}
	
	static int[] dijkstra(int start) {
		boolean[] visited = new boolean[n+1];
		int[] cost = new int[n+1];
		Arrays.fill(cost, INF);
		
		cost[start] = 0;
		
		for (int i = 1; i < n+1; i++) {
			int minCost = INF;
			int minVertex = -1;
			for (int j = 1; j < n+1; j++) {
				if (!visited[j] && minCost > cost[j]) {
					minCost = cost[j];
					minVertex = j;
				}
			}
			
			if (minVertex == -1) break;
			visited[minVertex] = true;
			
			for (int j = 0; j < graph[minVertex].size(); j++) {
				int[] next = graph[minVertex].get(j);
				int nextVertex = next[0];
				int nextWeight = next[1];
				if (!visited[nextVertex]) {
					cost[nextVertex] = Math.min(cost[nextVertex], cost[minVertex] + nextWeight);
				}
			}
		}
		return cost;
	}

}
