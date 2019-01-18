#include <stdio.h>
#include <stdlib.h>

typedef struct _node{
    int key;
    struct _node *left;
    struct _node *right;
}node;


node* init_to_bt(int value){
   node *n;
   n=(node*)malloc(sizeof(node));
   n->key=value;
   n->left=NULL;
   n->right=NULL;
   return n;
}

node* mknode(int value){
    node *n;
    n=(node*)malloc(sizeof(node));
    n->key=value;
    n->left=NULL;
    n->right=NULL;
    return n;
}

int insert_to_bt(node *child,node *parent){
    if(parent->key >= child->key){
        if(!(parent->left)){
            parent->left=child;
            return 1;
        }
        else{
            insert_to_bt(child, parent->left);
        }
    }
    return 0;
}

int main(int argc, char *argv[]){
    node *root,*n1;
    root=init_to_bt(50);
    n1=mknode(30);
    insert_to_bt(n1, root);

    printf("%d",n1->key);
}
