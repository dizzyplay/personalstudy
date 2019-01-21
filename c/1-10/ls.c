#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/types.h>
#include <dirent.h>
#include <errno.h>

void do_ls(char *path);

int main(int argc, char *argv[]){
  if(argc<2){
    fprintf(stderr,"%s : arguments needs",argv[0]);
  }
  for(int i=1; i<argc; i++){
    do_ls(argv[i]);
  }
}

void do_ls(char *path){
  DIR *fd;
  struct dirent *dt;

  fd=opendir(path);
  if(!fd){
    perror(path);
    exit(1);
  }
  while(dt=readdir(fd)){
    if(*dt->d_name != '.'){
      printf("%s\n",dt->d_name);
      if(dt->d_type == DT_DIR){
        char child_dir_name[80];
        strcpy(child_dir_name,path);
        strcat(child_dir_name,"/");
        strcat(child_dir_name,dt->d_name);
        do_ls(child_dir_name);
      }
    }
  }
  closedir(fd);
}
