#include <stdio.h>
#include <stdlib.h>

void do_head(FILE *f, int lines);

int main(int argc, char *argv[]){
  do_head(stdin,atoi(argv[1]));
}

void do_head(FILE *f, int lines){
  int i;
  char buf[1024];
  for(i=0;i<lines;i++){
    if(fgets(buf,100,stdin)==NULL) break;
    fputs(buf,stdout);
  }

}
