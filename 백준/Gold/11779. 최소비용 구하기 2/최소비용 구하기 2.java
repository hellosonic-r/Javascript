import java.util.*;
import java.io.*;

public class Main {
	static final int INF = Integer.MAX_VALUE;
	static ArrayList<int[]>[] graph;
	static int n;
	
	public static void main(String[] args) throws Exception {
		//System.setIn(new FileInputStream("./src/res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		
		n = Integer.parseInt(br.readLine());
		int m = Integer.parseInt(br.readLine());
		
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
		
		int[] cost = new int[n+1];
		Arrays.fill(cost, INF);
		
		int[] prev = new int[n+1];
		Arrays.fill(prev, -1);
		
		dijkstra(start, cost, prev);
		
		System.out.println(cost[end]);
		
		ArrayList<Integer> path = new ArrayList<>();
		for (int at = end; at != -1; at = prev[at]) {
			path.add(at);
		}
		
		Collections.reverse(path);
		
		System.out.println(path.size());
		for (int city : path) {
			System.out.print(city + " ");
		}
		
		
	}
	
	static void dijkstra(int start, int[] cost, int[] prev) {
		boolean[] visited = new boolean[n+1];
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
				if (!visited[nextVertex] && cost[nextVertex] >= cost[minVertex] + nextWeight) {
					cost[nextVertex] = cost[minVertex] + nextWeight;
					prev[nextVertex] = minVertex;
					
				}
			}
		}
		
		
		
	}
	
	
	
	
	
	
	
}
