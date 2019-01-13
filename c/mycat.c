#include <stdio.h>

int main(int argc, char *argv[]){
  FILE *fp;
  char c;
  fp=fopen(argv[1],"r");
  while(1){
    c=fgetc(fp);
    if(c==EOF) break;
    if(c==9) printf("\\t\n");
    if(c==10)printf("$개행\n");
  }
}
// 탭 문자를 만나면 \와 t 두글자로 출력하고 개행이라는 글자를 만나면 $과 개행으로 출력하는 cat
