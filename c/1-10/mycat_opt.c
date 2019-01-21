#include <stdio.h>
#include <stdlib.h>
#include <getopt.h>

void print_tab(char *path);
void print_line(char *path);

int main(int argc, char *argv[]){
  FILE *fp;
  int opt;
  while((opt=getopt(argc,argv,"nt"))!= -1){
    switch(opt){
      case 'n':
        print_line(argv[1]);
        exit(0);
      case 't':
        print_tab(argv[1]);
        exit(0);
    }
  }
}

void print_tab(char *path){
  FILE *f;
  char c;
  f=fopen(path,"r");
  while(1){
    c=fgetc(f);
    if(c==EOF)break;
    if(c==9)printf("\\t\n");
  }
  fclose(f);
}

void print_line(char *path){
  FILE *f;
  char c;
  f=fopen(path,"r");
  while(1){
    c=fgetc(f);
    if(c==EOF)break;
    if(c==10)printf("$개행\n");
  }
  fclose(f);
}
// 탭 문자를 만나면 \와 t 두글자로 출력하고 개행이라는 글자를 만나면 $과 개행으로 출력하는 cat
