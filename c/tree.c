#include <stdio.h>

typedef struct _node{
  int key;
  struct BT *left;
  struct BT *right;
}node;

void init_tree(void){
  head=(node*)malloc(sizeof(node));
  tail=(node*)malloc(sizeof(node));
  head->left=tail;
  head->right=tail;
  tail->left=tail;
  tail->right=tail;
}

int main(int argc, char *argv[]){
  node bt;
  bt.key=3;
  printf("%d",bt.key);
}
