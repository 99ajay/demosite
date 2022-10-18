#include<iostream>
using namespace std;
class cc
{
    public:
    int add(int a,int b)
    {
        return (a+b);
    }
    int add(int a,int b,int c)
    {
        return (a+b+c);
    }
};
int main()
{
    cc obj;
    int res=obj.add(2,3,'a');
    cout<<res<<endl;
}