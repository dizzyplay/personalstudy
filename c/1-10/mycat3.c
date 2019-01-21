#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]){
  FILE *fp;
  int i;
  long lSize,t;
  char *buf;
  if(argc<2){
    fprintf(stderr,"need arguments");
  }
  for(i=1;i<argc;i++){
    fp = fopen(argv[i],"r");
    if(!fp){
      fprintf(stderr,"invalid file name\n");
      return -1;
    }
    if(fseek(fp,0,SEEK_END)==0){
    lSize=ftell(fp);
    rewind(fp);
    buf=malloc(sizeof(char)*lSize);
    fread(buf,1,lSize,fp);
    fwrite(buf,1,lSize,stdout);
    fclose(fp);
    }
  }
}
