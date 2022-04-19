// C++ implementation of the approach
#include <bits/stdc++.h>
using namespace std;
int visited[501][5001];

// Structure for queue Node.
struct Node {
	int input1, b;
	string str;
};
  int sumDigits(int no)
    {
        if(no == 0){
          return 0 ;
        }
        
        return (no % 10) + sumDigits(no / 10) ;
    }
int findNumber(int input1)
{
  int b=sumDigits(input1);
	queue<Node> q;
	Node temp = Node{ 0, 0, "" };
	visited[0][0] = 1;
	q.push(temp);
	while (!q.empty()) {
		Node u = q.front();
		q.pop();
		if (u.input1 == 0 && u.b == b)
			return std::stoi(u.str);
		for (int i = 0; i < 10; i++) {
			int dd = (u.input1* 10 + i) % input1;
			int ss = u.b + i;
			if (ss <= b && !visited[dd][ss]) {
				visited[dd][ss] = 1;
				q.push(Node{ dd, ss, u.str + char('0' + i) });
			}
		}
	}

	return -1;
}

// Driver code.
int main()
{
	int a = 10;
	cout << findNumber(a);
	return 0;
}
