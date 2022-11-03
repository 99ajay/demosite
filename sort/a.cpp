#include<iostream>
using namespace std;
int partition(int arr[],int n)
{
    int i=0;
    int j=0;
    while(j<=n)
    {
       if(arr[j]%2==0)
       {
        swap(arr[j],arr[i]);
        i++;
        j++;
       }
       else{
        j++;
       }
    }
    return (i-1);
}
int main()
{
  int arr[]={9,4,3,2,1,20,12,8};
   cout<<partition(arr,7)<<endl;
  for(int i=0;i<8;i++)
  {
    cout<<arr[i]<<" ";
  }
  return 0;
}