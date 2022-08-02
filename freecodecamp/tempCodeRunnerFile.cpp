
      string solution(string str) {
        map<int, string> map;
        string temp;
		
        for(auto i:str){
            if(isdigit(i))
                map[i] = temp;
            else if(i == ' ')
                temp = "";
            else
                temp += i;
        }
        string ans;
        for(auto i:map)
        {
            ans += i.second + " ";
        }
        ans.pop_back();  
        return ans;
    }