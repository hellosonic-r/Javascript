import java.util.*;
import java.io.*;

public class Main {

	public static void main(String[] args) throws Exception {
		// System.setIn(new FileInputStream("./src/res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		
		int[] subjects = new int[n+1];
		Arrays.fill(subjects, 1);
		
		ArrayList<Integer>[] graph = new ArrayList[n + 1];
		for (int i = 0; i < n+1; i++) {
			graph[i] = new ArrayList<>();
		}
		
		for (int i = 0; i < m; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			graph[from].add(to);
		}
		
		// 1 (2 3)
		// 2 (5)
		// 4 (5)
		
		for (int i = 1; i < n+1; i++) {
			for (int j = 0; j < graph[i].size(); j++) {
//				System.out.println("graph[i].get(j): " + graph[i].get(j) + "subjects[i]: " + subjects[i]);
				int max = Math.max(subjects[graph[i].get(j)], subjects[i]+1);
				subjects[graph[i].get(j)] = max;
//				System.out.println("i: "+i +" subject[i]:"+subjects[i]);
//				System.out.println(Arrays.toString(subjects));
			}
		}
//		System.out.println(Arrays.toString(subjects));
		for (int i = 1; i < n+1; i++) {
			System.out.print(subjects[i]);
			if (i != n) System.out.print(" ");
		}
		
	}
	
	
	
	
	
	
	
	
	
}
