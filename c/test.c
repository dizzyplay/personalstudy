#include <stdio.h>
#include <stdlib.h>

int sum(int a, int b){
  return a+b;
}

int main(int argc, char* argv[]){
  int s;
  s=sum(2,3);
  printf("%d",s);
  return 0;
}


