#include <stdio.h>
#include <stdlib.h>

#define DEFAULT_N_LINES 10

void do_head(FILE *f, int lines);


int main(int argc, char *argv[]){
  int opt;
  FILE *f;
  long lines=DEFAULT_N_LINES;
  f=fopen(argv[1],"r");
  do_head(f,lines);
  exit(0);
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


