import java.util.*;
import java.io.*; 

public class Main {

	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
//		System.setIn(new FileInputStream("src/res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(br.readLine());
		br.close();
		
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n-i-1; j++){
				System.out.print(' ');
			}
			for (int j = 0; j < i+1; j++) {
				System.out.print('*');
			}
			System.out.println();
		}
	}

}
