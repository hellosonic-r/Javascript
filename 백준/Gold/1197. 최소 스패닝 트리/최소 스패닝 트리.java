import java.util.*;
import java.io.*;

public class Main {
	
	static final int INF = Integer.MAX_VALUE;
	static ArrayList<int[]>[] graph;
	static int v, mst;
	
	public static void main(String[] args) throws Exception {
		// System.setIn(new FileInputStream("./src/res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		v = Integer.parseInt(st.nextToken());
		int e = Integer.parseInt(st.nextToken());
		
		graph = new ArrayList[v+1];
		
		for (int i = 1; i < v+1; i++) {
			graph[i] = new ArrayList();
		}
		
		for (int i = 0; i < e; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			int weight = Integer.parseInt(st.nextToken());
			graph[from].add(new int[] {to, weight});
			graph[to].add(new int[] {from, weight});
		}
		
		prim();
		System.out.println(mst);
		
	}
	
	static void prim() {
		boolean[] visited = new boolean[v+1];
		int[] cost = new int[v+1];
		Arrays.fill(cost, INF);
		cost[1] = 0;
		mst = 0;
		int cnt = 0;
		
		
		for (int i = 1; i < v+1; i++) {
			int minVertex = -1;
			int minCost = INF;
			for (int j = 1; j < v+1; j++) {
				if (!visited[j] && minCost > cost[j]) {
					minCost = cost[j];
					minVertex = j;
				}
			}
			
			visited[minVertex] = true;
			mst += minCost;
			if (cnt++ == v-1) break;
			
			for (int j = 0; j < graph[minVertex].size(); j++) {
				int[] next = graph[minVertex].get(j);
				int nextVertex = next[0];
				int nextWeight = next[1];
				if (!visited[nextVertex] && cost[nextVertex] > nextWeight) {
					cost[nextVertex] = nextWeight;
				}
			}
			
		}
	}
	
	
	
}
