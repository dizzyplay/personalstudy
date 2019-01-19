#include <stdio.h>
#include <stdlib.h>

typedef struct _node{
  int key;
  struct _node *left;
  struct _node *right;
}node;

typedef struct _qnode{
  struct _node *tnode;
  struct _qnode *prev;
  struct _qnode *next;
}qnode;


qnode *head,*tail;

void init_queue(void);
void push_to_queue(node *n);
qnode* pop_to_queue(void);

node* init_to_bt(int value);
int insert_to_bt(node *child,node *parent);
node* insert_to_tree(int value,node* tree);
void bt_inorder_traversal(node* root);
void bt_BFT(node* root);

int main(int argc, char *argv[]){
  node *bt1;
 
  bt1=init_to_bt(5);
  insert_to_tree(3,bt1);
  insert_to_tree(1,bt1);
  insert_to_tree(4,bt1);
  insert_to_tree(6,bt1);
  printf("level order=n");
  bt_BFT(bt1);
  printf("inorder traversal\n");
  bt_inorder_traversal(bt1);
}

void bt_BFT(node* root){
  qnode *q;
  node *tree_node;
  init_queue();
  push_to_queue(root);
  while(head -> next != tail){
    q=pop_to_queue();
    tree_node=q->tnode;
    printf("%d\n",tree_node->key);
    if(tree_node->left) push_to_queue(tree_node->left);
    if(tree_node->right) push_to_queue(tree_node->right);
  }
}

qnode* pop_to_queue(){
  if(head->next==tail){
    fprintf(stderr,"que is empty");
    exit(1);
  }
  else{
    qnode* node;
    node=head->next;
    head->next = node->next;
    node->next->prev = head;
    return node;
  }
}

void push_to_queue(node* n){
  qnode* new_node;
  new_node = (qnode*)malloc(sizeof(qnode));
  new_node->tnode = n;
  tail->prev->next = new_node;
  new_node->prev = tail->prev;
  new_node->next = tail;
  tail->prev = new_node;
}

void init_queue(void){
  head=(qnode*)malloc(sizeof(qnode));
  tail=(qnode*)malloc(sizeof(qnode));
  head->next=tail;
  head->prev=head;
  tail->prev=head;
  tail->next=tail;
}


node* init_to_bt(int value){
  node *n;
  n=(node*)malloc(sizeof(node));
  n->key=value;
  n->left=NULL;
  n->right=NULL;
  return n;
}

int insert_to_bt(node *child,node *parent){
  int parent_value = parent->key;
  if(parent_value >= child->key){
    if(!(parent->left)){
      parent->left=child;
      return 1;
    }
    else{
      insert_to_bt(child, parent->left);
    }
  }
  else if(parent_value < child->key){
    if(!(parent->right)){
      parent->right=child;
    }
    else{
      insert_to_bt(child, parent->right);
    }
  }
  else{
    printf("insert error");
  }
  return 0;
}

node* insert_to_tree(int value,node* tree){
  node *n;
  n=(node*)malloc(sizeof(node));
  n->key=value;
  insert_to_bt(n,tree);
  return n;
}

void bt_inorder_traversal(node* root){
  if(root->left) bt_inorder_traversal(root->left);
  printf("%d\n",root->key);
  if(root->right) bt_inorder_traversal(root->right);
}

