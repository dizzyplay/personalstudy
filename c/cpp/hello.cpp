#include <iostream>

using namespace std;
int main(){
  int user_input;
  while(1){
    cout << "input" << endl;
    cin >> user_input;
    if(user_input===4){
      break;
    }
    switch (user_input){
      case 1:
        cout << 'name is vovo';
    }
  }

  return 0;
}
