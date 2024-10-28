import java.util.*;
import java.io.*;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		HashMap<Integer, Integer> map = new HashMap<>();
		
		int n = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		
		st = new StringTokenizer(br.readLine());
		
		int[] nums = new int[n+1];
		
		for (int i = 0; i < n; i++) {
			nums[i] = Integer.parseInt(st.nextToken());
		}
		
		int start = 0, end = 0, cnt = 0;
		
		while (end <= n) {
			cnt = Math.max(cnt, end-start);
			if (!map.containsKey(nums[end])) {
				map.put(nums[end++], 1);
				continue;
			}
			if (map.get(nums[end]) < k) {
				int currValue = map.get(nums[end]);
				map.put(nums[end++], currValue + 1);
			} else {
				int currValue = map.get(nums[start]);
				map.put(nums[start++], currValue - 1);
			}
		}
		
		System.out.println(cnt);
		
	}

}
