#include <stdio.h>
#include <stdlib.h>

typedef struct _node{
  int key;
  struct _node *next;
}node;

node *head, *tail;

void init_list(){
  head=(node*)malloc(sizeof(node));
  tail=(node*)malloc(sizeof(node));
  head->next=tail;
  tail->next=tail;
}

void list_push(int k){
  node *t;
  t=(node*)malloc(sizeof(node));
  t->key=k;
  head->next=t;
  t->next=tail;
}

node* insert_after(int k, node* t){ // 이전노트를 넣는다
  node *s;
  s=(node*)malloc(sizeof(node));
  s->key=k;
  s->next=t->next;
  t->next=s;
  return s;
}

int delete_next(node *t){
  node *s;
  if(t->next==tail){
    return 0;
  }
  s=t->next;
  t->next= t->next->next;
  free(s);
  return 1;
}

node *find_node(int k){
  node *s;
  s = head->next;
  while(s->key!=k && s!=tail){
    s=s->next;
  }
  return s;
}

void node_traversal(node *t){
  while(t != tail){
    printf("%d\n",t->key);
    t=t->next;
  }
}

int main(int argc, char *argv[]){
  node *first, *second,*s;
  init_list();
  first=insert_after(1,head);
  second=insert_after(2,first);
  s=find_node(3);
  printf("%d",s->key);
}

