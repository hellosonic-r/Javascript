import java.util.*;
import java.io.*;

public class Main {

	public static void main(String[] args) throws Exception {
		// FileInputStream fs = new FileInputStream("./src/res/input.txt");
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		
		st = new StringTokenizer(br.readLine());
		
		int[] arr = new int[m];
		
		int idx = 0;
		while(st.hasMoreTokens()) {
			arr[idx] = Integer.parseInt(st.nextToken());
			idx++;
		}
		
		LinkedList<Integer> deque = new LinkedList<>();
		for (int i = 1; i < n+1; i++) {
			deque.add(i);
		}
		
		int cnt = 0;
		for (int num: arr) {
			int targetIdx = deque.indexOf(num);
			int halfIdx = deque.size() % 2 == 0 ? deque.size() / 2 - 1 : deque.size() / 2;
			if (targetIdx > halfIdx) {
				while (deque.getFirst() != num) {
					deque.addFirst(deque.removeLast());
					cnt++;
				}
			} else {
				while (deque.getFirst() != num) {
					deque.addLast(deque.removeFirst());
					cnt++;
				}
			}
			deque.removeFirst();
		}
		System.out.println(cnt);
	}
}
