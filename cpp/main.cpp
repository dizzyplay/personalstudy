#include <iostream>
#include <string>
#include <stdio.h>

using namespace std;

int main(){
  string s,str;
  int n;
  cin >> s;
  n= s.length();
  for(int i=1; i<n+1; i++){
    cout << s[i-1];
    if(i%10==0){
      cout << "\n";
    }
  }
  return 0;
}
