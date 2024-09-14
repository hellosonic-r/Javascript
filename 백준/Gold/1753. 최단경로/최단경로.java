import java.util.*;
import java.io.*;

public class Main {
	
	static final int INF = Integer.MAX_VALUE;
	static ArrayList<int[]>[] graph;
	static int v;

	public static void main(String[] args) throws Exception {
		// System.setIn(new FileInputStream("./src/res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		v = Integer.parseInt(st.nextToken()); // 정점의 개수 
		int e = Integer.parseInt(st.nextToken()); // 간선의 개수
		
		int k = Integer.parseInt(br.readLine()); // 시작 정점의 번호
		
		graph = new ArrayList[v+1];
		for (int i = 0; i < v+1; i++) {
			graph[i] = new ArrayList<int[]>();
		}
		
	
		for (int i = 0; i < e; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			int weight = Integer.parseInt(st.nextToken());
			graph[from].add(new int[] {to, weight});
		}
		
		int[] result = dijkstra(k);
		for (int i = 1; i < v+1; i++) {
			if (result[i] == INF) System.out.println("INF");
			else System.out.println(result[i]);
		}
		
		
	
	}
	
	static int[] dijkstra(int start) {
		boolean[] visited = new boolean[v+1];
		int[] dist = new int[v+1];
		Arrays.fill(dist, INF);
		
		dist[start] = 0;
		
		for (int i = 1; i < v+1; i++) {
			int minDist = INF;
			int minVertex = -1;
			for (int j = 1; j < v+1; j++) {
				if (!visited[j] && minDist > dist[j]) {
					minDist = dist[j];
					minVertex = j;
				}
			}
			if (minVertex == -1) break;
			visited[minVertex] = true;
			for (int j = 0; j < graph[minVertex].size(); j++) {
				int[] next = graph[minVertex].get(j);
				int nextVertex = next[0];
				int weight = next[1];
				if (!visited[nextVertex]) {
					dist[nextVertex] = Math.min(dist[nextVertex], dist[minVertex] + weight);
				}
			}
		}
		
		return dist;
		
	}
	
	
	
}
