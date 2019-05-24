#include <stdio.h>
int sum(int a, int b);

int main(){
  int s;

  s=sum(3,3);
  printf("hello\n %d",s);
  
  return 0;
}

int sum(int a, int b){
  return a+b;
}
