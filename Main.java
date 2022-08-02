import java.util.Collections;
import java.util.Vector;
import java.util.Scanner;

public class Main {
	static void AwesomeSort(Vector<Integer> m, int n)
	{
		Vector<Integer> v1 = new Vector<>();
		Vector<Integer> v2 = new Vector<>();
		Vector<Integer> v3 = new Vector<>();

		int i;
		for (i = 0; i < n; i++) {
			if (m.get(i) % 10 == 0)
				v1.add(m.get(i));
			else if (m.get(i) % 2 == 0)
				v2.add(m.get(i));
			else
				v3.add(m.get(i));
		}
		Collections.sort(v1, Collections.reverseOrder());

		for (int ii = 0; ii < v1.size(); ii++) {
			System.out.print(v1.get(ii) + " ");
		}
		for (int ii = v2.size()-1; ii >= 0; ii--) {
			System.out.print(v2.get(ii) + " ");
		}
		for (int ii = 0; ii < v3.size(); ii++) {
			System.out.print(v3.get(ii) + " ");
		}
	}
	public static void main(String[] args)
	{
		Vector<Integer> arr = new Vector<>();
		Scanner scn=new Scanner(System.in);
		int c;
		c=scn.nextInt();
		for(int j=0;j<c;j++)
		{
	    int n;
	    n=scn.nextInt();
	    for(int i=0;i<n;i++)
	    {
	        int x=scn.nextInt();
	        arr.add(x);
	    }
		 
		AwesomeSort(arr, n);
		}
	}
}