#include <stdio.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <unistd.h>
#include <time.h>

static char *filetype(mode_t mode){
  if(S_ISREG(mode)) return "file";
  return "this is not a file.";
}

int main(int argc, char *argv[])
{
  struct stat *buf;
  buf=(struct stat *)malloc(sizeof(stat));
  stat(argv[1], buf);
  puts(filetype(buf->st_mode));
  printf("%ld\n",buf->st_blksize);
  printf("%ld\n",buf->st_size);
  printf("%s\n",ctime(&buf->st_atime));
  printf("%s\n",ctime(&buf->st_ctime));
  printf("%s\n",ctime(&buf->st_atime));
  return 0;
}
