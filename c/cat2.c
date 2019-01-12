#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]){
  int i;
  char c;
  FILE *f;
  for(i=1; i<argc; i++){
    printf("%d",i);
    f=fopen(argv[i],"r");
    if(!f){
      perror(argv[i]);
      exit(1);
    }
    while((c=fgetc(f))!=EOF){
      if(putchar(c)<0) exit(1);
    }
    fclose(f);
  }
  exit(0);
}
