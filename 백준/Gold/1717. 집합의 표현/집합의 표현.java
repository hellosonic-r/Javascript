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
			int oper = Integer.parseInt(st.nextToken());
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			if (oper == 0) {
				union(a,b);
			} else if (oper == 1) {
				if (find(a) == find(b)) System.out.println("YES");
				else System.out.println("NO");
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
		if (rootA != rootB) {
			parent[rootB] = rootA;
		}
		
	}
	
	
	
	
	
	
	
}
