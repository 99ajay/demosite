#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int main()
{
  int n;
  cin>>n;
  vector<int>x;
  vector<int>y;
  for(int i=0;i<n;i++)
  {
    int l,m;
    cin>>l>>m;
    x.push_back(l);
    y.push_back(m);
  }
  int j=n-1;
  int perimeter=0;
  int c=x[n-1];
  int d=y[n-1];
  for(int i=0;i<n;i++)
  {
      if(i==(n-1))
     {
         perimeter=perimeter+sqrt((pow(x[i],2)-pow(c,2))+(pow(y[i],2)-pow(d,2)));
     }
     else{
             perimeter=perimeter+sqrt((pow(x[i],2)-pow(x[i+1],2))+(pow(y[i],2)-pow(y[i+1],2)));

     }

  }
  cout<<perimeter<<endl;
  return 0;
}