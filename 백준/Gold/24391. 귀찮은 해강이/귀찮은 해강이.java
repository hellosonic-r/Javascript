import java.util.*;
import java.io.*;

public class Main {

	static int[] parent;
	
	public static void main(String[] args) throws Exception {
		// System.setIn(new FileInputStream("./src/res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		
		parent = new int[n+1];
		for (int i = 0; i < n+1; i++) {
			parent[i] = i;
		}
		
		for (int i = 0; i < m; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			union(from, to);
		}
		
//		System.out.println(Arrays.toString(parent));
		
		
		int[] path = new int[n];
		st = new StringTokenizer(br.readLine());
		for (int i = 0; i < n; i++) {
			path[i] = Integer.parseInt(st.nextToken());
		}
		
		int prev = find(path[0]);
		int cnt = 0;
		
		for (int i = 1; i < n; i++) {
			if (prev != find(path[i])) {
				cnt++;
			}
			prev = find(path[i]);
		}
		
		System.out.println(cnt);
	}
	
	static int find(int value) {
		if (parent[value] == value) return value;
		return parent[value] = find(parent[value]);
	}
	
	static void union(int a, int b) {
		int rootA = find(a);
		int rootB = find(b);
		if (rootA != rootB) parent[rootB] = rootA;
	}
	
}
