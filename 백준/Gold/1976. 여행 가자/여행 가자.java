import java.util.*;
import java.io.*;

public class Main {
	
	static int[] parent;

	public static void main(String[] args) throws Exception {
		// System.setIn(new FileInputStream("./src/res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		
		int n = Integer.parseInt(br.readLine()); // 도시의 수
		int m = Integer.parseInt(br.readLine()); // 여행 계획 도시 수
		
		parent = new int[n+1];
		
		for (int i = 1; i < n+1; i++) {
			parent[i] = i;
		}
		
		for (int i = 1; i < n+1; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 1; j <= n; j++) {
				int connectCity = Integer.parseInt(st.nextToken());
				if (connectCity == 1) {
					union(j, i);
				}
			}
		}
		
		st = new StringTokenizer(br.readLine());
		int[] plans = new int[m];
		for (int i = 0; i < m; i++) {
			plans[i] = Integer.parseInt(st.nextToken());
		}
		
		String answer = "YES";
		int firstCityRoot = find(plans[0]);
		
		for (int i = 1; i < m; i++) {
			if (find(plans[i]) != firstCityRoot) {
				answer = "NO";
				break;
			}
		}
		
		System.out.println(answer);
	}
	
	static int find(int city) {
		if (parent[city] == city) {
			return city;
		} 
		return find(parent[city]);
	}
	
	static void union(int city1, int city2) {
		int root1 = find(city1);
		int root2 = find(city2);
		if (root1 != root2) {
			parent[root2] = root1;
		}
	}
}
