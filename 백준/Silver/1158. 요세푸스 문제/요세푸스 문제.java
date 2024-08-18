import java.util.*;
import java.io.*;


public class Main {

	public static void main(String[] args) throws Exception {
		// FileInputStream fs = new FileInputStream("./src/res/input.txt");
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder sb = new StringBuilder();
		
		ArrayDeque<Integer> queue = new ArrayDeque<>();

		int n = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());

		for (int i = 1; i < n+1; i++) { 
			queue.offer(i);
		}
		int cnt = 0;
		sb.append("<");
		while(!queue.isEmpty()) {
			for (int i = 0; i < k - 1; i++) {
				queue.offer(queue.poll());
			}
			sb.append(queue.poll());
			if (cnt != n - 1) sb.append(", ");
			cnt++;
		}
		sb.append(">");
		
		System.out.println(sb.toString());
	
	}
}
