import java.util.*;
import java.io.*;

public class Main {
	
	public static void main(String[] args) throws Exception {
		// System.setIn(new FileInputStream("./src/res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		
		int n = Integer.parseInt(br.readLine());
		long[] arr = new long[n];
		st = new StringTokenizer(br.readLine());
		for (int i = 0; i < n; i++) {
			arr[i] = Long.parseLong(st.nextToken());
		}
		
		long min = Long.MAX_VALUE;
		
		int ml = 0, mr = 0;
		for (int i = 0; i < n-1; i++) {
			int left = i+1;
			int right = n-1;
			while (left <= right) {
				int mid = (left + right) / 2;
				long sum = Math.abs(arr[i] + arr[mid]);
				
				if (min > sum) {
					min = sum;
					ml = i; mr = mid;
				}
				if (arr[mid] + arr[i] >= 0) {
					right = mid-1;
				} else {
					left = mid+1;
				}
			}
		}
		System.out.println(arr[ml] + " " + arr[mr]);
	}
}
