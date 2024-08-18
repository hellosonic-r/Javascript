import java.util.*;
import java.io.*;

public class Main {

	public static void main(String[] args) throws Exception {
		// FileInputStream fs = new FileInputStream("./src/res/input.txt");
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		String str = br.readLine();

		Stack<Character> stack = new Stack<>();

		int result = 0;

		for (int i = 0; i < str.length(); i++) {
			char c = str.charAt(i);
			if (c == '(') {
				stack.push('(');
				continue;
			}
			if (c == ')') {
				stack.pop();

				if (str.charAt(i - 1) == '(') {
					result += stack.size();
				} else {
					result++;
				}

			}
		}

		System.out.println(result);

	}
}
