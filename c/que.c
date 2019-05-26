#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct qNode{
  char *data;
  struct qNode *next;
}node;

node* push(node *parent ,char *v){
  node *n = malloc(sizeof(node));
  n->data = v;
  parent->next = n;

  return n;
}

int main(){
  node *first = malloc(sizeof(node));
  node *second = malloc(sizeof(node));
  first->data="first message";
  second = push(first,"second");
  printf("%s",second->data);
  return 0;
}
