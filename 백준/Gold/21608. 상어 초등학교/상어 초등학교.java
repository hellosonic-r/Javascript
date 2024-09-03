import java.util.*;
import java.io.*;

public class Main {

	static int[] dx = { 0, 1, 0, -1 }; // 상우하좌
	static int[] dy = { -1, 0, 1, 0 };
	static int n;
	static int[][] board;

	public static void main(String[] args) throws Exception {
		// FileInputStream fs = new FileInputStream("./src/res/input.txt");
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = null;

        n = Integer.parseInt(br.readLine());
        int answer = 0;

        int[][] likeNums = new int[n * n + 1][4];
        int[] nums = new int[n * n];
        board = new int[n][n];

        for (int i = 0; i < n * n; i++) {
            st = new StringTokenizer(br.readLine());
            int num = Integer.parseInt(st.nextToken());
            nums[i] = num;
            for (int j = 0; j < 4; j++) {
                int likeNum = Integer.parseInt(st.nextToken());
                likeNums[num][j] = likeNum;
            }
        }

        for (int cnt = 0; cnt < n * n; cnt++) {
            int num = nums[cnt];
            ArrayList<int[]> candidates = new ArrayList<>();
            int maxLike = -1, maxEmpty = -1;

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    if (board[i][j] != 0) continue;

                    int likeCount = 0, emptyCount = 0;

                    for (int dir = 0; dir < 4; dir++) {
                        int nx = j + dx[dir];
                        int ny = i + dy[dir];

                        if (0 <= nx && nx < n && 0 <= ny && ny < n) {
                            if (board[ny][nx] == 0) emptyCount++;
                            for (int likeNum : likeNums[num]) {
                                if (board[ny][nx] == likeNum) {
                                    likeCount++;
                                    break;
                                }
                            }
                        }
                    }

                    if (likeCount > maxLike || (likeCount == maxLike && emptyCount > maxEmpty)) {
                        candidates.clear();
                        candidates.add(new int[]{i, j});
                        maxLike = likeCount;
                        maxEmpty = emptyCount;
                    } else if (likeCount == maxLike && emptyCount == maxEmpty) {
                        candidates.add(new int[]{i, j});
                    }
                }
            }

            /*
            candidates.sort((a, b) -> {
                if (a[0] != b[0]) return a[0] - b[0];
                return a[1] - b[1];
            });
            */

            int[] selected = candidates.get(0);
            board[selected[0]][selected[1]] = num;
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int num = board[i][j];
                int likeCnt = 0;
                for (int dir = 0; dir < 4; dir++) {
                    int nx = j + dx[dir];
                    int ny = i + dy[dir];
                    if (0 <= nx && nx < n && 0 <= ny && ny < n) {
                        for (int k = 0; k < 4; k++) {
                            if (board[ny][nx] == likeNums[num][k]) {
                                likeCnt += 1;
                                break;
                            }
                        }
                    }
                }
                if (likeCnt == 1) answer += 1;
                else if (likeCnt == 2) answer += 10;
                else if (likeCnt == 3) answer += 100;
                else if (likeCnt == 4) answer += 1000;
            }
        }

        System.out.println(answer);
    }
}
