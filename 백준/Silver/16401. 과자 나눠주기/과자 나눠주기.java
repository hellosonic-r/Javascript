import java.io.*;
import java.util.*;

public class Main {
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int m = Integer.parseInt(st.nextToken());
		int n = Integer.parseInt(st.nextToken());
		
		int[] cookies = new int[n];
		
		st = new StringTokenizer(br.readLine());
		int max = 0;
		for (int i = 0; i < n; i++) {
			cookies[i] = Integer.parseInt(st.nextToken());
            max = Math.max(max, cookies[i]);
		}
		
		// Arrays.sort(cookies);
		int result = 0;
		
		int start = 1, end = max;
		while (start <= end) {
			int mid = (start + end) / 2;
			int cnt = 0;
			for (int i = 0; i < n ; i++) {
				if (cookies[i] >= mid) {
					cnt += (cookies[i] / mid);
				}
			}
//			System.out.println(cnt + " " + mid);
			
			if (cnt < m) { // 
				end = mid - 1;
			} else{
				start = mid + 1;
				result = mid;
			} 
			
		}
		
		System.out.println(result);
//		
//		System.out.println(start);
//		System.out.println(end);
		
		
		
		
		
	}

	
}