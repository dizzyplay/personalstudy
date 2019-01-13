#include <stdio.h>
#include <stdlib.h>

void do_head(FILE *f, long lines);

int main(int argc, char *argv[]){
  int i;
  if(argc==2){
    do_head(stdin, atol(argv[1]));
  }
  else{
    for(i=2; i<argc; i++){
      FILE *f;
      f=fopen(argv[i],"r");
      if(!f){
        fprintf(stderr," [%s] is invalid file name",argv[i]);
        exit(1);
      }
      do_head(f,atol(argv[1]));
      fclose(f);
    }
  }
  exit(0);
}

void do_head(FILE *f, long lines){
  int i;
  char c;
  for(i=0; i<lines; i++){
    while(1){
      if((c=fgetc(f))==EOF) break;
      else if(c==10){
        printf("\n");
        break;
      }
      if(putchar(c)<0) break;
    }
  }
}
