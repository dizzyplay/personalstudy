#include <stdio.h>
#include <stdlib.h>

void do_head(FILE *f, int lines);

int main(int argc, char *argv[]){
  do_head(stdin,atoi(argv[1]));
}

void do_head(FILE *f, int lines){
  int i;
  char c;
  for(i=0; i<lines; i++){
    while(1){
      if((c=fgetc(f))==EOF) break;
      else if(c==10){
        printf("\n");break;
      } 
      putchar(c);
    }
  }
}


