#include <stdio.h>

int main(int argc, char *argv[]){
  if(argc<2)return 1;
  int i;
  char c;
  for(i=1; i<argc;i++){
    int a=0;
    char buf[1024],c;
    FILE *fp;
    fp=fopen(argv[i],"r");
    while(fgets(buf,sizeof buf,fp)!=NULL){
      fputs(buf,stdout);
      a++;
    }
    printf("\n%d: lines \n",a);
  }
}
