#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

static void do_cat(const char *path);
static void die(const char *path);
static void count_n(const char *path);

int main(int argc, char *argv[]){
  int i;
  if(argc<2){
    do_cat(NULL);
  }
  for(i=1; i<argc; i++){
    do_cat(argv[i]);
    count_n(argv[i]);
  }
  exit(0);
}

#define BUFFER_SIZE 1024

static void do_cat(const char *path){
  char buf[BUFFER_SIZE];
  int fd;
  int n=1;

  fd=open(path,O_RDONLY);
  if(fd<0){
    while(1){
      n=read(STDIN_FILENO,buf,sizeof buf);
      write(STDOUT_FILENO, buf, n);
    }
  }
  else{
    while(n){
      n=read(fd,buf,sizeof buf);
      if(n==0) break;
      if(n<0) die(path);
      if(write(STDOUT_FILENO, buf, n)<0) die(path);
    }
    if(close(fd)<0) die(path);
  }
}

static void count_n(const char *path){
  char c[1];
  int fd;
  int n=1;
  int line=0;
  fd=open(path,O_RDONLY);
  for(;;){
    n=read(fd,c,1);
    if(n==0) break;
    if(c[0]=='\n') line++;
  }
  printf("%s line : %d\n",path,line);
}

static void die(const char *s){
  perror(s);
  exit(1);
}
