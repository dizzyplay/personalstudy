#include <iostream>
#include <algorithm>
#include <cmath>

using namespace std;

int main(){
  int n;
  double M;
  double sum;
  sum=0;
  cin >> n ;
  double score[n], new_score[n];
  for(int i=0; i<n;i++){
    cin >> score[i];
  }
  for(auto s:score){
    M=max(M,s);
  }
  for(int i=0;i<n;i++){
    new_score[i]=score[i]/M * 100;
  }
  for(double s:new_score){
    sum+= s;
  }
  
  cout << fixed;
  cout.precision(2);
  cout << sum/n ;
  return 0;
}
