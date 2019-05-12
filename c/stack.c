#include <stdio.h>
#include <stdlib.h>

typedef struct _node{
  int key;
  struct _node *next;
  struct _node *prev;
}node;

node *bottom;
node *top;

void initStack(){
  bottom = (node*)malloc(sizeof(node));
  top = (node*)malloc(sizeof(node));
  bottom -> prev = bottom;
  bottom -> next = top;
  top -> prev = bottom;
  top -> next = top;
}

int pushStack(int value){
  node *n;
  n=(node*)malloc(sizeof(node));
  n->key=value;
  top->prev->next = n;
  n->prev= top->prev;
  n->next = top;
  top->prev = n;
  return value;
}

int popStack(){
  if(bottom->next == top){
    return -1;
  } 
  node *n;
  int s;
  n=top->prev;
  n->prev->next=top;
  top->prev = n->prev;
  s = n->key;
  free(n);
  return s;
}

int main(int argc, char *argv[])
{
  initStack();
  pushStack(1);
  pushStack(2);
  pushStack(3);
  pushStack(4);
  pushStack(5);
  pushStack(6);
  while(bottom->next != top){
    int n;
    n=popStack();
    printf("%d\n",n);
  }
  
  return 0;
}
