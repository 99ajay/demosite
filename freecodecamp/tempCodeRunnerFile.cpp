 #include <bits/stdc++.h>

using namespace std;

#define int long long

#define endl "\n"

vector<int> adj[10001];

int32_t main(){

int n; cin>>n;

for(int i=0;i<n-1;i++){

int x,y; cin>>x>>y;

adj[x].push_back(y);

adj[y].push_back(x);

}

int k; cin>>k;

vector<int> p(k);

int lvl[n+1]={0},visit[n+1]={0};;

for(int i=0;i<k;i++) cin>>p[i],visit[p[i]]=1;

queue<int> q;

int ma=0;

q.push(1);

while(!q.empty()){

int x=q.front();

q.pop();

visit[x]=1;

for(auto i:adj[x]){

if(visit[i]==0){

q.push(i);

lvl[i]+=lvl[x]+1;

visit[i]=1;

}

}

}

for(int i=1;i<=n;i++) ma=max(ma,lvl[i]);

cout<<ma<<endl;

}