import java.util.*;
import java.io.*;

public class Main {

	static int[] parent;
	
	public static void main(String[] args) throws Exception {
		// System.setIn(new FileInputStream("./src/res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		StringBuilder sb = new StringBuilder();
		
		int n = Integer.parseInt(br.readLine());
		
		parent = new int[n+1];
		
		for (int i = 0; i < n+1; i++) {
			parent[i] = i;
		}
		
		for (int i = 0; i < n-2; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			union(from, to);
			
		}
		
		for (int i = 1; i < n; i++) {
			for (int j = i + 1; j < n+1; j++) {
				if (find(i) != find(j)) {
					sb.append(i).append(" ").append(j);
					System.out.println(sb.toString());
					return;
				}
			}
		}
	
		
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
