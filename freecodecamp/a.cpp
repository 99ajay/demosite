 #include<iostream>
 #include<vector>
 using namespace std;
 for (auto& it : A) {
  
        cout << it.first << ' '
             << it.second << endl;
    }
  string solution(string s) {
        unordered_map<int,string>map;
        string s;
        int x;
       // vector<pair<string, int> > A;
        for(int i=0;i<s.size();i++)
        {
         
           if(isdigit(s[i]))
                x = int(s[i]);
            s.push_back(s[i]);
             if(s[i]== ' ')
             {
                map.insert({x,string});
                s[i]= ' ';
                x=0;
             }
           
        }
         sort(A.begin(), A.end(), cmp)


    }
 int main()
 {
     string s;
     cin>>s;
     cout<<sortSentence(s)<<endl;
     



 }