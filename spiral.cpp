#include<iostream>
#include<bits/stdc++.h>

using namespace std;
// #define r 4
// #define c 4

int *print_spiral(int mat[][c], int r, int c){
    int top=0,bottom=r-1,left=0,right=c-1;
    while(top<=bottom && left<=right){

    for(int i=left;i<=right;i++){
        cout<<mat[top][i]<<" ";
    }
    top++;
    for(int i=top;i<=bottom;i++){
        cout<<mat[i][right]<<" ";
    }
    right--;
    if(top<=bottom){
        for(int i=right;i>=left;i--){
            cout<<mat[bottom][i]<<" ";
        }
        bottom--;
    }
    if(left<=right){
        for(int i=bottom;i<=top;i++){
        cout<<mat[i][left]<<" ";
    }
    left++;
    }
    }
}

int main(){
     int arr[r][c];
   cout<<"Enter element of Matrix:";
     for(int i=0;i<r;i++){
        for(int j=0;i<c;j++){
            cin>>arr[i][j];
        }
     }
     
    print_spiral(arr,r,c);

return 0;
}