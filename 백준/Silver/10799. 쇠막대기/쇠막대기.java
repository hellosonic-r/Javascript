import java.util.*;
import java.io.*;

public class Main {

	public static void main(String[] args) throws Exception {
		// FileInputStream fs = new FileInputStream("./src/res/input.txt");
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		String str = br.readLine();

		ArrayDeque<Character> queue = new ArrayDeque<>();
		
		int result = 0;
		
		for (int i = 0; i < str.length(); i++) {
			char c = str.charAt(i);
			if (c == '(') queue.offerLast('(');
			
			if (c == ')') {
				queue.pollLast();
				if (str.charAt(i-1) == '(') {
					result += queue.size();
				} else {
					result ++;
				}
			}
		}
		
		System.out.println(result);

	}
}
