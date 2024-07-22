import java.util.*;
import java.io.*; 

public class Main {

	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(br.readLine());
		br.close();
		
		for (int i = n; i > 0; i--) {
			for (int j = 0; j < n-i; j++) {
				System.out.print(' ');
			}
			for (int j = 0; j < i*2-1; j++) {
				System.out.print('*');
			}
			System.out.println();
		}
	}

}
