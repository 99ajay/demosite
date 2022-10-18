#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int *mergesort(int a[],int b[],int n,int m)
{
    int *res=new int[n+m];
    int p1=0;
    int p2=0;
    int idx=0;
    while(idx<(n+m))
    {
        int v1=(p1<n)?a[p1]:INT_MAX;
        int v2=(p2<m)?b[p2]:INT_MAX;
        if(v1<v2)
        {
            res[idx]=v1;
            idx++;
            p1++;
        }
        else
        {
            res[idx]=v2;
            idx++;
            p2++;
        }
    }
    return res;
}
int *merge(int arr[],int lo,int hi)
{
    if(lo==hi)
    {
        int *base=new int[1];
        base[0]=arr[lo];
        return base;
    }
    int mid=(lo+hi)/2;
    int* left=merge(arr,lo,mid);
    int* right=merge(arr,mid+1,hi);
    return mergesort(left,right,mid-lo+1,hi-mid);

 }
int main()
{
   int arr[]={34,12,3,45,67,54,89,12,0};
//    int a[]={23,56,75,35,89};
   int *p=merge(arr,0,8);
   for(int i=0;i<9;i++)
   {
    cout<<p[i]<<" ";
   }
   return 0;
}