#include <iostream>
#include <iomanip>

using namespace std;

int main(){
  int n,count;

  count =0;
  cin >> n;
  if(n%5==0) {
    count += n/5;
    n=0;
  }
  while(n>=3){
    n-=3;
    count++;
    if(n%5==0){
      count += n/5;
      n=0;
      break;
    }
  }
  if(n==0) cout << count;
  else cout << -1;
  return 0;
}
