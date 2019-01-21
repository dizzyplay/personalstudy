#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <getopt.h>

typedef struct dNode{
  char *value;
  struct dNode *next;
  struct dNode *prev;
}node;

#define QUE_LIMIT 5

node *head,*tail;

void initQue();
void putQue(char *str);
char* getQue();
int max_length=0;
int que_limit=0;

int main(int argc, char *argv[]){
  FILE *f;
  char buf[256];
  char *tchar;
  int opt;

  if((f=fopen(argv[1],"r"))==NULL){
    printf("standard input mode\n");
    f=stdin;
  }

  while((opt=getopt(argc,argv,"n:"))!=-1){
    switch (opt) {
      case 'n':
        que_limit=atoi(optarg);
        puts(optarg);
        initQue();
        while(fgets(buf,sizeof buf,f)){
          tchar = (char*)malloc(sizeof buf);
          memcpy(tchar,buf,256);
          putQue(tchar);
        }
        printf("--> %s <--\n",argv[1]);
        for(int i=0; i<que_limit; i++){
          printf("%s",getQue());
        }
        exit(0);
      case '?':
        fprintf(stderr,"Usage: %s -n value",argv[1]);
        exit(1);
    }
  }
}

void initQue(){
  head=(node*)malloc(sizeof(node));
  tail=(node*)malloc(sizeof(node));
  head->prev=head;
  head->next=tail;
  tail->prev=head;
  tail->next=tail;
}

void putQue(char *str){
  node *t,*temp;
  if(max_length<=que_limit){
    max_length++;
  }
  else{
    temp = (node*)malloc(sizeof(node));
    temp=head->next;
    head->next = temp->next;
    free(temp);
  }
  t=(node*)malloc(sizeof(node));
  t->value=str;
  tail->prev->next=t;
  t->prev = tail->prev;
  tail->prev=t;
  t->next=tail;
}

char* getQue(){
  char *str;
  node *t;
  t=(node*)malloc(sizeof(node));
  t=head->next;
  if(t==tail){
    fprintf(stderr,"Que is empty");
    exit(1);
  }
  str=t->value;
  head->next = t->next;
  free(t);
  return str;
}

