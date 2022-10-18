#include<iostream>
using namespace std;
int partition(int arr[],int pivot,int lo,int hi)
{
    int i=lo;
    int j=lo;
    while(j<=hi)
    {
       if(arr[j]<=pivot)
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
void quicksort(int arr[],int lo,int hi)
{
   int mid=(lo+hi)/2;
   swap(arr[mid],arr[hi]);
   int pivot=arr[hi];
   int pidx=partition(arr,pivot,lo,hi);
  if(lo<pidx-1)
  {
   quicksort(arr,lo,pidx-1);
  }
  if(pidx+1<hi)
  {
   quicksort(arr,pidx+1,hi);
  }

}
int main()
{
  int arr[]={23,12,45,23,67,11,78,43};
  quicksort(arr,0,7);
  for(int i=0;i<8;i++)
  {
    cout<<arr[i]<<" ";
  }
  return 0;
}