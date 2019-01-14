#include <stdio.h>
#include <stdlib.h>

#define _GNU_SOURCE
#define DEFAULT_N_LINES 10
#include <getopt.h>


static void do_head(FILE *f, int lines);
static struct option longopts[]={
  {"lines", required_argument, NULL, 'n'},
  {"help", no_argument, NULL, 'h'},
  {0,0,0,0}
};

int main(int argc, char *argv[]){
  int opt;
  long lines=DEFAULT_N_LINES;
  while((opt=getopt_long(argc,argv,"n:", longopts, NULL))!= -1){
    switch(opt){
      case 'n':
        lines = atol(optarg);
        break;
      case 'h':
        fprintf(stdout,"Usage %s [-n LINES] [FILE ...]\n",argv[0]);
        exit(0);
      case '?':
        fprintf(stderr,"Usage %s [-n LINES] [FILE ...]\n",argv[0]);
        exit(1);
    }
  }
  if(optind == argc){
    do_head(stdin,lines);
  }else{
    int i;
    for(i=optind; i<argc; i++){
      FILE *f;
      f=fopen(argv[i],"r");
      if(!f){
        perror(argv[i]);
        exit(1);
      }
      do_head(f,lines);
      fclose(f);
    }
  }
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


