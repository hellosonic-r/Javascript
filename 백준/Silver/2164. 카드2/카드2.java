import java.util.*;
import java.io.*;


public class Main {

	public static void main(String[] args) throws Exception {
		// FileInputStream fs = new FileInputStream("./src/res/input.txt");
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());
		
		ArrayDeque<Integer> queue = new ArrayDeque<>();
		
		for (int i = 1; i < n + 1; i++) {
			queue.offer(i);
		}
		
		while (queue.size() > 1) {
			queue.poll();
			int num = queue.poll();
			queue.offer(num);
		}
		
		System.out.println(queue.peek());
	}
}
